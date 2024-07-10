import { Line } from "./tokens";

const HeroData: Line[] = [
  {
    tokens: [
      {
        type: 'string',
        value: '1..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl',
      },
      {
        type: 'string',
        value: 'Hello!',
        fontSize: 'text-4xl',
        className: 'text-[#94F2FF] font-bold lg:text-8xl md:text-7xl',
      },
    ],
  },
  {
    tokens: [
      {
        type: 'string',
        value: '2..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl',
      },
      {
        type: 'string',
        value: "I'm Aadarsh",
        fontSize: 'text-4xl',
        className: 'text-white font-bold lg:text-8xl md:text-7xl',
      },
    ],
  },
  {
    tokens: [
      {
        type: 'string',
        value: '4..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl',
      },
      {
        type: 'string',
        value: 'A developer based in Pokhara',
        fontSize: 'text-xl',
        className: 'text-yellow-500 lg:text-3xl',
      },
    ],
    renderTime: 1000,
  },
  {
    tokens: [
      {
        type: 'string',
        value: '5..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl md:text-2xl',
      },
      {
        type: 'string',
        value: 'Nepal',
        fontSize: 'text-xl',
        className: 'text-yellow-500 md:text-2xl lg:text-3xl',
      },
    ],
  },
  {
    tokens: [
      {
        type: 'string',
        value: '5..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl',
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
        className: 'text-green-500 md:text-2xl lg:text-3xl',
      },
    ],
    renderTime: 200,
  },
  {
    tokens: [
      {
        type: 'string',
        value: '6..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl',
      },
      {
        type: 'whitespace',
        value: ' ',
        fontSize: 'text-base',
      },
      {
        type: 'string',
        value: "'Python', 'Javascript'",
        fontSize: 'text-xl',
        className: 'text-green-500 md:text-2xl lg:text-3xl',
      },
    ],
    renderTime: 200,
  },
  {
    tokens: [
      {
        type: 'string',
        value: '7..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl',
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
        value: '8..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl',
      },
      {
        type: 'comment',
        value: '//and many more',
        fontSize: 'text-xl',
        className: 'text-gray-500 lg:text-3xl md:text-2xl',
      },
    ],
  },
  {
    tokens: [
      {
        type: 'string',
        value: '9..',
        fontSize: 'text-2xl',
        className: 'text-gray-500 text-opacity-20 lg:text-3xl',
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
        className: 'text-sky-500 cursor-pointer underline decoration-dotted lg:text-3xl md:text-2xl',
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
        value: 'About',
        fontSize: 'text-xl',
        className: 'text-sky-500 underline decoration-dotted lg:text-3xl md:text-2xl',
        isLink: true,
        linkTo: '/about',
      },
      {
        type: 'whitespace',
        value: ' ',
        fontSize: 'text-base',
      },
    ],
  },
];

export default HeroData;
