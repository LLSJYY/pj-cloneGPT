import React from "react";
import { Meta, Story } from "@storybook/react";
import SearchBar from "./Bar";
type SearchBarProps = React.ComponentProps<typeof SearchBar>;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const Template = (args: any) => <SearchBar {...args}></SearchBar>;

export const Default: any = Template.bind({});
Default.args = { status: "Idle", display: "flex" };
// export const Hover: any = Template.bind({});
// Hover.parameters = { pseudo: { hover: true } };

// export const DirectSelector = () => (
//   <>
//     <div className="story-grid">
//       <Default />
//     </div>
//   </>
// );

// DirectSelector.parameters = {
//   pseudo: {
//     hover: ["[data-hover]"],
//   },
// };
