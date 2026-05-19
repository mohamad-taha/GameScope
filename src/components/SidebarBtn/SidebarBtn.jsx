import { RiMenuLine } from "react-icons/ri";
import { useContext } from "react";
import "./SidebarBtn.css";
import { Context } from "../../context/Context";
const MenuBtn = () => {
  const { setShowSidebar } = useContext(Context);

  return (
    <button onClick={() => setShowSidebar(true)} className="sidebarBtn">
      <RiMenuLine fontSize={20} />
    </button>
  );
};

export default MenuBtn;
