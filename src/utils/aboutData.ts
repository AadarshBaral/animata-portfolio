import { Line } from "./tokens";

export const aboutData: Line[] = [
    {
        tokens: [
            {
                type: 'string',
                value: '1..',
                fontSize: 'text-2xl',
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'string',
                value: "I'm Aadarsh Baral",
                fontSize: 'text-4xl',
                className: 'text-white font-bold  md:text-7xl',
            },
        ],
    },

    {
        tokens: [
            {
                type: 'string',
                value: '3..',
                fontSize: 'text-2xl',
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'comment',
                value: '//{ Fullstack Developer }',
                fontSize: 'text-xl',
                className: 'text-gray-500 lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '4..',
                fontSize: 'text-2xl',
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'keyword',
                value: 'const',
                fontSize: 'text-xl',
                className: 'text-pink-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'whitespace',
                value: '  ',
                fontSize: 'text-base',
            },
            {
                type: 'identifier',
                value: 'mySkills',
                fontSize: 'text-xl',
                className: 'text-sky-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'whitespace',
                value: ' ',
                fontSize: 'text-base',
            },
            {
                type: 'operator',
                value: ' = ',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
            {
                type: 'whitespace',
                value: ' ',
                fontSize: 'text-base',
            },
            {
                type: 'punctuation',
                value: '[',
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
        ],
        renderTime: 500,
    },
    {
        tokens: [
            {
                type: 'string',
                value: '5..',
                fontSize: 'text-2xl',
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'whitespace',
                value: ' ',
                fontSize: 'text-base',
            },
            {
                type: 'string',
                value: "React, Flask, FastAPI, Django",
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '6..',
                fontSize: 'text-2xl',
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'punctuation',
                value: ']',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
            {
                type: 'punctuation',
                value: ';',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '7..',
                fontSize: 'text-2xl',
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'comment',
                value: "//and much more",
                fontSize: 'text-xl',
                className: 'text-gray-500 lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '8..',
                fontSize: 'text-2xl',
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'comment',
                value: 'Go to',
                fontSize: 'text-xl',
                className: 'text-gray-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'whitespace',
                value: ' ',
                fontSize: 'text-base',
            },
            {
                type: 'string',
                value: 'Projects',
                fontSize: 'text-xl',
                className: 'text-sky-500 cursor-pointer underline decoration lg:text-3xl md:text-2xl',
                isLink: true,
                linkTo: '/projects',
            },
            {
                type: 'string',
                value: ', ',
                fontSize: 'text-xl',
                className: 'text-gray-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'string',
                value: 'Home',
                fontSize: 'text-xl',
                className: 'text-sky-500 underline decoration lg:text-3xl md:text-2xl',
                isLink: true,
                linkTo: '/',
            },
            {
                type: 'whitespace',
                value: ' ',
                fontSize: 'text-base',
            },
            {
                type: 'string',
                value: 'to see more.',
                fontSize: 'text-xl',
                className: 'text-gray-500 lg:text-3xl md:text-2xl',
            },
        ],
    },
];

export default aboutData;
