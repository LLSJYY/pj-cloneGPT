import React from "react";
import { Meta, Story } from "@storybook/react";
import SearchBar from "./Bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type SearchBarProps = React.ComponentProps<typeof SearchBar>;
const queryClient = new QueryClient();

export default {
  title: "Search/Bar",
  component: SearchBar,
  decorators: [
    (Story: Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["Idle", "isLoading", "Success", "isError"],
      },
    },
    display: {
      control: {
        type: "select",
        options: ["none", "flex"],
      },
    },
  },
} as Meta<SearchBarProps>;

const Template: Story<SearchBarProps> = (args: any) => (
  <SearchBar {...args}></SearchBar>
);

export const Default = Template.bind({});
Default.args = { status: "Idle", display: "flex" };
