import Image from "next/image";
import { Option } from "./OptionBox.style";
import Clear from "@/asset/Clear.svg";
import Upgrade from "@/asset/Upgrade.svg";
import Update from "@/asset/Update.svg";
import Logout from "@/asset/Logout.svg";
import Light from "@/asset/Light.svg";
import { OPTIONS } from "@/constant/sideBarOption";

interface IProps<T> {
  storybookProps: T;
}
interface IMockData<T> {
  options: string[];
  optionsImg: any[];
  optionsData: T;
}
interface IOptionsData {
  [key: string]: string;
}

const mockData: IMockData<IOptionsData> = {
  options: ["Clear", "Light", "Upgrade", "Update", "Logout"],
  optionsImg: [Clear, Light, Upgrade, Update, Logout],
  optionsData: {
    Clear: OPTIONS.CLEAR,
    Upgrade: OPTIONS.UPGRADE,
    Update: OPTIONS.UPDATE,
    Logout: OPTIONS.LOGOUT,
    Light: OPTIONS.LIGHT,
  },
};
const OptionBox = (props: any) => {
  const { storybookProps = mockData } = props;

  const { options, optionsImg, optionsData } = storybookProps;

  return (
    <>
      {options.map((option: string, index: number) => (
        <Option key={option}>
          <Image alt={option} src={optionsImg[index]} />
          {optionsData[option]}
        </Option>
      ))}
    </>
  );
};

export default OptionBox;
