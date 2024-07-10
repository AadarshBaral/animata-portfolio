export interface Token {
  type: string;
  value: string;
  color?: string;
  fontSize?: string;
  linkTo?: string;
  isLink?: boolean;
  className?: string;
  isExternalLink?: boolean;
  externalLink?: string;
}

export interface Line {
  tokens: Token[];
  renderTime?: number;
}

export const colorSchemes: Record<string, Record<string, { color: string }>> = {
  vscode: {
    keyword: { color: 'text-pink-500' },
    identifier: { color: 'text-sky-500' },
    operator: { color: 'text-white' },
    string: { color: 'text-green-500' },
    punctuation: { color: 'text-white' },
    comment: { color: 'text-gray-500' },
    whitespace: { color: '' },
  },
  vim: {
    keyword: { color: 'text-blue-500' },
    identifier: { color: 'text-yellow-500' },
    operator: { color: 'text-purple-500' },
    string: { color: 'text-red-500' },
    punctuation: { color: 'text-white' },
    comment: { color: 'text-gray-400' },
    whitespace: { color: '' },
  },
};
