import React, { useEffect, useMemo, useState } from "react";
import { cn } from "../utils/utils";

interface TypingTextProps {
  text: string;
  delay?: number;
  repeat?: boolean;
  cursor?: React.ReactNode;
  className?: string;
  grow?: boolean;
  alwaysVisibleCount?: number;
  smooth?: boolean;
  waitTime?: number;
}

// function Blinker() {
//   const [show, setShow] = useState(true);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShow((prev) => !prev);
//     }, 500);
//     return () => clearInterval(interval);
//   }, []);
//   return <span>{show ? "|" : ""}</span>;
// }

function SmoothEffect({
  words,
  index,
  alwaysVisibleCount,
}: {
  words: string[];
  index: number;
  alwaysVisibleCount: number;
}) {
  return (
    <div className="flex flex-wrap whitespace-pre">
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={cn("transition-opacity duration-300 ease-in-out", {
            "opacity-100": wordIndex < index,
            "opacity-0": wordIndex >= index + alwaysVisibleCount,
          })}
        >
          {word}
          {wordIndex < words.length && <span>&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}

function NormalEffect({
  text,
  index,
  alwaysVisibleCount,
}: {
  text: string;
  index: number;
  alwaysVisibleCount: number;
}) {
  return <>{text.slice(0, Math.max(index, Math.min(text.length, alwaysVisibleCount ?? 1)))}</>;
}

enum TypingDirection {
  Forward = 1,
  Backward = -1,
}

function CursorWrapper({
  visible,
  children,
  waiting,
}: {
  visible?: boolean;
  waiting?: boolean;
  children: React.ReactNode;
}) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setOn((prev) => !prev);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!visible || (!on && !waiting)) {
    return null;
  }

  return <>{children}</>;
}

function Type({
  text,
  repeat,
  cursor,
  delay,
  grow,
  className,
  alwaysVisibleCount,
  smooth,
  waitTime = 1000,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<TypingDirection>(TypingDirection.Forward);

  const words = useMemo(() => text.split(/\s+/), [text]);
  const total = smooth ? words.length : text.length;

  useEffect(() => {
    let interval: number | undefined;

    const startTyping = () => {
      setIndex((prevDir) => {
        if (direction === TypingDirection.Backward && prevDir === TypingDirection.Forward) {
          clearInterval(interval);
        } else if (direction === TypingDirection.Forward && prevDir === total - 1) {
          clearInterval(interval);
        }
        return prevDir + direction;
      });
    };

    interval = window.setInterval(startTyping, delay || 32);
    return () => clearInterval(interval);
  }, [total, direction, delay]);

  useEffect(() => {
    let timeout: number | undefined;

    if (index >= total && repeat) {
      timeout = window.setTimeout(() => {
        setDirection(TypingDirection.Backward);
      }, waitTime || 1000);
    }

    if (index <= 0 && repeat) {
      timeout = window.setTimeout(() => {
        setDirection(TypingDirection.Forward);
      }, waitTime || 1000);
    }
    return () => clearTimeout(timeout);
  }, [index, total, repeat, waitTime]);

  const waitingNextCycle = index === total || index === 0;

  return (
    <div className={cn("relative font-mono", className)}>
      {!grow && <div className="invisible">{text}</div>}
      <div className={cn({ "absolute inset-0 h-full w-full": !grow })}>
        {smooth ? (
          <SmoothEffect words={words} index={index} alwaysVisibleCount={alwaysVisibleCount || 1} />
        ) : (
          <NormalEffect text={text} index={index} alwaysVisibleCount={alwaysVisibleCount || 1} />
        )}
        <CursorWrapper waiting={waitingNextCycle} visible={!smooth && !!cursor}>
          {cursor}
        </CursorWrapper>
      </div>
    </div>
  );
}

export default function TypingText(props: TypingTextProps) {
  return <Type {...props} />;
}
