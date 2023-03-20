import ChatBoxes from "./chatBox";
import { ChatBox } from "./chatBox/Chatbox.styles";
import { SideBarNav } from "./index.style";

const SideBar = () => {
  return (
    <SideBarNav>
      <ChatBoxes />
    </SideBarNav>
  );
};

export default SideBar;
