import Links from "../Links/Links";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import logo from "../../assets/imgs/logo.webp";
import "./Sidebar.css";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(Context);

  return (
    <div>
      <div
        style={{
          display: showSidebar ? "block" : "none",
        }}
        className="overlay"
        onClick={() => setShowSidebar(false)}
      ></div>
      <div
        style={{
          transform: showSidebar ? "translateX(0)" : "translate(-100%)",
        }}
        className="sidebar"
      >
        <Link>
          <img width={150} src={logo} alt="logo" />
        </Link>
        <Links />
      </div>
    </div>
  );
};

export default Sidebar;
