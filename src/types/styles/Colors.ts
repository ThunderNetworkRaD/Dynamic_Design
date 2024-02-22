type ColorArray = [string, string, string, string, string, string, string, string, string, string];

type ColorNames = 'dark' | 'gray' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'green' | 'lime' | 'yellow' | 'orange';

export type ColorScheme = {
  [K in ColorNames]: ColorArray;
};
