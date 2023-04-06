import { Preview } from "@storybook/react";
export const parameters = {
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#202123",
      },
      {
        name: "normal",
        value: "#ffffff",
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
