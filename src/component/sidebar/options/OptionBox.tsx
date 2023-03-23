import Image from "next/image";
import { Option } from "./OptionBox.style";
import Clear from "@/asset/Clear.svg";
import Upgrade from "@/asset/Upgrade.svg";
import Update from "@/asset/Update.svg";
import Logout from "@/asset/Logout.svg";
import Light from "@/asset/Light.svg";

const OptionBox = () => {
  return (
    <>
      <Option>Clear conversations</Option>
      <Image alt="" src={Clear}></Image>
      <Image alt="" src={Upgrade}></Image>
      <Image alt="" src={Update}></Image>
      <Image alt="" src={Logout}></Image>
      <Image alt="" src={Light}></Image>

      <Option>Upgrade to Plus</Option>
      <Option>Update & FAQ</Option>
      <Option>Log out</Option>
    </>
  );
};

export default OptionBox;
