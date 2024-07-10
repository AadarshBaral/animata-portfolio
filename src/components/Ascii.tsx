import  { useState, useEffect } from 'react';

function Ascii() {
    const [colors, setColors] = useState({
        topRowColor: 'rgb(255, 255, 255)',
        homeRowColor: 'rgb(255, 255, 255)',
        bottomRowColor: 'rgb(255, 255, 255)',
    });

    useEffect(() => {
        const changeColor = () => {
            const getRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

            setColors({
                topRowColor: getRandomColor(),
                homeRowColor: getRandomColor(),
                bottomRowColor: getRandomColor(),
            });
        };

        const interval = setInterval(changeColor, 500); // Change color every 500ms

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="items-end self-center">

        <pre className="text-white text-[10px] md:text-[13px] ">
            <span style={{ color: colors.topRowColor }}>
{`,---,---,---,---,---,---,---,---,---,---,---,---,---,-------,
|1/2| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | + | ' | <-    |
`}
            </span>
            <span style={{ color: colors.homeRowColor }}>
{`| ->| | Q | W | E | R | T | Y | U | I | O | P | ] | ^ |     |
|-----',--',--',--',--',--',--',--',--',--',--',--',--'|    |
| Caps | A | S | D | F | G | H | J | K | L | \\ | [ | * |    |
    `}
            </span>
            <span style={{ color: colors.bottomRowColor }}>

{`|    | < | Z | X | C | V | B | N | M | , | . | - |      |
|----'-,-',--'--,'---'---'---'---'---'---'-,-'---',--,------|
| ctrl |  | alt |                          |altgr |  | ctrl |
'------'  '-----'--------------------------'------'  '------'
Aadarsh Baral
`}
            </span>
        </pre>
</div>
    );
}

export default Ascii;
