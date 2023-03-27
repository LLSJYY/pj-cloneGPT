/* storybook mockData */
type Data<T extends string> = `${T}Data`;
type Img<T extends string> = `${T}Img`;
type Detail<T extends string> = `${T}Detail`;

export type IMockData<T> = {
  [key: Data<string>]: string[];
  [key: Img<string>]: string[];
  [key: Detail<string>]: T;
};
