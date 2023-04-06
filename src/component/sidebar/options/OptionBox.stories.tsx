import React from "react";
import type { Meta, Story } from "@storybook/react";
import { IMockData } from "@/utils/types/Types";
import OptionBox from "./OptionBox";

import { Option } from "./OptionBox.style";
import Clear from "@/asset/Clear.svg";
import Upgrade from "@/asset/Upgrade.svg";
import Update from "@/asset/Update.svg";
import Logout from "@/asset/Logout.svg";
import Light from "@/asset/Light.svg";
import { OPTIONS } from "@/constant/sideBarOption";
type OptionBoxProps = React.ComponentProps<typeof OptionBox>;
interface IOptionsData {
  [key: string]: string;
}

const mockData: IMockData<IOptionsData> = {
  optionsData: ["Clear", "Light", "Upgrade", "Update", "Logout"],
  optionsImg: [Clear, Light, Upgrade, Update, Logout],
  optionsDetail: {
    Clear: OPTIONS.CLEAR,
    Upgrade: OPTIONS.UPGRADE,
    Update: OPTIONS.UPDATE,
    Logout: OPTIONS.LOGOUT,
    Light: OPTIONS.LIGHT,
  },
};
export default {
  title: "sidebar/Option",
  component: OptionBox,
  argTypes: {},
  backgrounds: {
    default: "normal",
  },
} as Meta<OptionBoxProps>;

const Template: Story<OptionBoxProps> = (args) => {
  console.log(args);
  return <OptionBox {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  storybookProps: mockData,
};
