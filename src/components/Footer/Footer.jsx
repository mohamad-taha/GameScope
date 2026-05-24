import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.webp";
import Links from "../Links/Links";
import PersonalLinks from "../PersonalLinks/PersonalLinks";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mt">
      <div className="footerContent">
        <div>
          <Link to="/" aria-label="Go to homepage">
            <img src={logo} alt="logo" width={200} />
          </Link>

          <p>
            Discover trending games, upcoming releases, and top-rated titles
            across all platforms.
          </p>
        </div>

        <div className="footerLinks">
          <Links />

          <PersonalLinks />
        </div>
      </div>

      <p> © {currentYear} GameScope. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
