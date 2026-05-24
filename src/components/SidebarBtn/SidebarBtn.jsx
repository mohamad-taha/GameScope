import { RiMenuLine } from "react-icons/ri";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./SidebarBtn.css";

const MenuBtn = () => {
  const { setShowSidebar } = useContext(Context);

  return (
    <>
      <button
        onClick={() => setShowSidebar(true)}
        className="sidebarBtn"
        aria-label="Open sidebar"
      >
        <RiMenuLine fontSize={20} />
      </button>
    </>
  );
};

export default MenuBtn;
