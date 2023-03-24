import React from "react";
import NewSearch from "../New/NewSearch";
import { Meta, Story } from "@storybook/react";
import { EXAMPLES, CAPABILITIES, LIMITATIONS } from "@/constant/indexPage";
type NewSearchProps = React.ComponentProps<typeof NewSearch>;

const mockData = {
  categories: ["Example", "Capabilities", "Limitations"],
  categoriesData: {
    Example: [...EXAMPLES],
    Capabilities: [...CAPABILITIES],
    Limitations: [...LIMITATIONS],
  },
};
export default {
  title: "Reselt/New",
  component: NewSearch,
  argTypes: {
    storybookProps: {
      control: { type: "object" },
    },
  },
} as Meta<NewSearchProps>;

const Template: Story<NewSearchProps> = (args) => {
  return <NewSearch {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  storybookProps: mockData,
};
export const noData = Template.bind({});
noData.args = { storybookProps: { categories: [], categoriesData: {} } };
