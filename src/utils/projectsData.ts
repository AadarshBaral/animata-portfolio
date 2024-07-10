import { Line } from "./tokens";

const projectsData: Line[] = [
    {
        tokens: [
            {
                type: 'string',
                value: '1..',
                fontSize: "text-sm",
                className: 'text-gray-500 font-bold text-opacity-10 lg:text-3xl',
            },
            {
                type: 'string',
                value: 'My Projects',
                fontSize: 'text-4xl',
                className: 'text-white font-bold lg:text-8xl md:text-7xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '2..',
                fontSize: "text-sm",
                className: 'text-gray-500 font-bold text-opacity-10 lg:text-3xl',
            },
            {
                type: 'string',
                value: 'A showcase of my coding journey',
                fontSize: 'text-xl',
                className: 'text-yellow-500 lg:text-3xl md:text-2xl',
            },
        ],
        renderTime: 2000,
    },
    {
        tokens: [
            {
                type: 'string',
                value: '3..',
                fontSize: "text-sm",
                className: 'text-gray-500 font-bold text-opacity-10 lg:text-3xl',
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
                value: 'myProjects',
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
                value: '= ',
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
    },
    {
        tokens: [
            {
                type: 'string',
                value: '4..',
                fontSize: "text-sm",
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'punctuation',
                value: '{',
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '5..',
                fontSize: "text-sm",
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'identifier',
                value: 'name',
                fontSize: 'text-xl',
                className: 'text-sky-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'operator',
                value: ': ',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
            {
                type: 'string',
                value: "'CollegeChamps'",
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl underline decoration-dotted',
                isLink: true,
                isExternalLink: true,
                linkTo: 'https://collegechamps.com',
            },
            {
                type: 'punctuation',
                value: ',',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '6..',
                fontSize: "text-sm",
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'identifier',
                value: 'description',
                fontSize: 'text-xl',
                className: 'text-blue-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'operator',
                value: ': ',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
            {
                type: 'string',
                value: "'Test Preparation Site'",
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'punctuation',
                value: ',',
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
                fontSize: "text-sm",
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'identifier',
                value: 'tech',
                fontSize: 'text-xl',
                className: 'text-sky-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'operator',
                value: ': ',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
            {
                type: 'punctuation',
                value: '[',
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'string',
                value: "'Flask', 'JavaScript'",
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'punctuation',
                value: ']',
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'punctuation',
                value: ',',
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
                fontSize: "text-sm",
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'punctuation',
                value: '},',
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '9..',
                fontSize: "text-sm",
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'punctuation',
                value: '{',
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '10..',
                fontSize: "text-sm",
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'identifier',
                value: 'name',
                fontSize: 'text-xl',
                className: 'text-sky-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'operator',
                value: ': ',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
            {
                type: 'string',
                value: "'IOUSathi'",
                fontSize: 'text-xl',
                className: 'text-green-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'punctuation',
                value: ',',
                fontSize: 'text-xl',
                className: 'text-white lg:text-3xl md:text-2xl',
            },
        ],
    },
    {
        tokens: [
            {
                type: 'string',
                value: '11..',
                fontSize: "text-sm",
                className: 'text-gray-500 text-opacity-10 lg:text-3xl',
            },
            {
                type: 'identifier',
                value: 'description',
                fontSize: 'text-xl',
                className: 'text-blue-500 lg:text-3xl md:text-2xl',
            },
            {
                type: 'operator',
                value: ': ',
                fontSize: 'text-xl',
                className : 'text-white lg:text-3xl md:text-2xl',
            },

          ],

        },
          {
            tokens: [
                {
                    type: 'string',
                    value: '12..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'string',
                    value: "'App to manage transactions",
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'punctuation',
                    value: ',',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
            ],
        },
          {
            tokens: [
                {
                    type: 'string',
                    value: '13..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'string',
                    value: " with friends.'",
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'punctuation',
                    value: ',',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
            ],
        },
        {
            tokens: [
                {
                    type: 'string',
                    value: '13..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'identifier',
                    value: 'tech',
                    fontSize: 'text-xl',
                    className: 'text-sky-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'operator',
                    value: ': ',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
                {
                    type: 'punctuation',
                    value: '[',
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'string',
                    value: "'React Native', 'Firebase'",
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'punctuation',
                    value: ']',
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'punctuation',
                    value: ',',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
            ],
        },
        {
            tokens: [
                {
                    type: 'string',
                    value: '14..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'punctuation',
                    value: '},',
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
            ],
        },
        {
            tokens: [
                {
                    type: 'string',
                    value: '15..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'punctuation',
                    value: '{',
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
            ],
        },
        {
            tokens: [
                {
                    type: 'string',
                    value: '16..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'identifier',
                    value: 'name',
                    fontSize: 'text-xl',
                    className: 'text-sky-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'operator',
                    value: ': ',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
                {
                    type: 'string',
                    value: "'SillySyntax'",
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl underline decoration-dotted',
                    isLink: true,
                    isExternalLink: true,
                    linkTo: 'https://sillysyntax.com',
                },
                {
                    type: 'punctuation',
                    value: ',',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
            ],
        },
        {
            tokens: [
                {
                    type: 'string',
                    value: '17..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'identifier',
                    value: 'description',
                    fontSize: 'text-xl',
                    className: 'text-blue-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'operator',
                    value: ': ',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
                {
                    type: 'string',
                    value: "'My personal blog'",
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'punctuation',
                    value: ',',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
            ],
        },
        {
            tokens: [
                {
                    type: 'string',
                    value: '18..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'identifier',
                    value: 'tech',
                    fontSize: 'text-xl',
                    className: 'text-sky-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'operator',
                    value: ': ',
                    fontSize: 'text-xl',
                    className: 'text-white lg:text-3xl md:text-2xl',
                },
                {
                    type: 'punctuation',
                    value: '[',
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'string',
                    value: "'WordPress'",
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
                {
                    type: 'punctuation',
                    value: ']',
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
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
                    value: '19..',
                    fontSize: "text-sm",
                    className: 'text-gray-500 text-opacity-10 lg:text-3xl',
                },
                {
                    type: 'punctuation',
                    value: '},',
                    fontSize: 'text-xl',
                    className: 'text-green-500 lg:text-3xl md:text-2xl',
                },
            ],
        },
        {
            tokens: [
                {
                    type: 'whitespace',
                    value: ' ',
                    fontSize: 'text-base',
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
          }
        ];


        export default projectsData;

