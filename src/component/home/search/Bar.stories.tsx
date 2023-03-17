import React from "react";
import { Meta, Story } from "@storybook/react";
import SearchBar from "./Bar";
import { RecoilRoot } from "recoil";
type SearchBarProps = React.ComponentProps<typeof SearchBar>;

export default {
  title: "Search/Bar",
  component: SearchBar,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta<SearchBarProps>;

const Template: Story<SearchBarProps> = (args) => {
  return <SearchBar {...args}></SearchBar>;
};

export const State = Template.bind({});
State.args = {
  storybookProps: {
    state: {
      isLoading: false,
      isSuccess: false,
      isError: false,
    },
  },
};
