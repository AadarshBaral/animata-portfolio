import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TypingText from './TypingText';
import { Line, Token, colorSchemes } from '../utils/tokens'; // Import the colorSchemes
import { cn } from '../utils/utils';
import { useAppContext } from '../context/portfolioContext';

// Define the default editor type, such as VS Code
const defaultEditorType = 'vscode';
const tokenStyles = colorSchemes[defaultEditorType];

interface TokenRendererProps {
  lines: Line[];
}

const TokenRenderer: React.FC<TokenRendererProps> = ({ lines }) => {
  const [displayedLines, setDisplayedLines] = useState<Line[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const {setAboutActive, setProjectsActive } = useAppContext();

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      if (currentTokenIndex < lines[currentLineIndex].tokens.length) {
        const timer = setTimeout(() => {
          setDisplayedLines((prevLines) => {
            const newLines = [...prevLines];
            if (!newLines[currentLineIndex]) {
              newLines[currentLineIndex] = { tokens: [] };
            }
            newLines[currentLineIndex].tokens.push(lines[currentLineIndex].tokens[currentTokenIndex]);
            return newLines;
          });
          setCurrentTokenIndex((prevIndex) => prevIndex + 1);
        }, 100); // Adjust delay as needed

        return () => clearTimeout(timer);
      } else {
        const lineDelayTimer = setTimeout(() => {
          setCurrentLineIndex((prevIndex) => prevIndex + 1);
          setCurrentTokenIndex(0);
        }, lines[currentLineIndex].renderTime||200); // Adjust delay between lines as needed

        return () => clearTimeout(lineDelayTimer);
      }
    }
  }, [currentLineIndex, currentTokenIndex, lines]);

  const renderLines = () => {
    return displayedLines.map((line, lineIndex) => (
      <div key={lineIndex} className="flex flex-wrap items-center whitespace-pre my-2">
        {line.tokens.map((token: Token, tokenIndex: number) => {
          const style = tokenStyles[token.type] || {};
          const combinedClassName = cn(style.color, token.fontSize, token.className, 'flex flex-col');

          if (token.isLink) {
            if (token.isExternalLink) {
              // External link
              return (
                <a
                  key={tokenIndex}
                  href={token.linkTo as string}
                  className={combinedClassName}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {token.value}
                </a>
              );
            } else {
              // Internal link
              return (
                <Link
                  key={tokenIndex}
                  to={token.linkTo as string}
                  className={combinedClassName}
                  onClick={() => {
                    if (token.linkTo === '/projects') setProjectsActive(true);
                    if (token.linkTo === '/about') setAboutActive(true);
                  }}
                >
                  {token.value}
                </Link>
              );
            }
          } else if (token.type === 'whitespace') {
            // Whitespace token
            return (
              <span key={tokenIndex} className="whitespace-pre">
                {token.value}
              </span>
            );
          } else {
            // Regular token with TypingText effect
            return (
              <TypingText
                key={tokenIndex}
                text={token.value}
                className={combinedClassName}
                repeat={false}
                cursor={<span className="text-gray-500"></span>}
                smooth={false}
              />
            );
          }
        })}
      </div>
    ));
  };


  return (
    <div className="text-left flex flex-col justify-center full custom-scrollbar w-full overflow-y-auto mt-2 ">
      {renderLines()}
    </div>
  );
};

export default TokenRenderer;
