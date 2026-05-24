import { Link } from "react-router-dom";
import "./Links.css";
import Menu from "../DropDownMenu/Menu";

const Links = () => {
  return (
    <ul className="linksContainer">
      <li>
        <Link to={"/"} aria-label="Navigate to Home">
          Home
        </Link>
      </li>

      <li>
        <Link to={"/games"} aria-label="Navigate to Games">
          Games
        </Link>
      </li>

      <Menu />

      <li>
        <Link to={"/upcoming"} aria-label="Navigate to Upcoming Games">
          Upcoming
        </Link>
      </li>
    </ul>
  );
};

export default Links;
