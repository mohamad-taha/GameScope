import { Link } from "react-router-dom";
import "./Header.css";


const Header = ({ title, link }) => {
  return (
    <div className="contentHeader">
      <h1> {title}</h1>
      <Link className="primaryBtn" to={link} aria-label={`See all ${title}`}>
        SEE ALL
      </Link>
    </div>
  );
};

export default Header;