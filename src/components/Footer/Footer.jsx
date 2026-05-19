import { Link } from "react-router-dom";
import "./Footer.css";
import Links from "../Links/Links";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mt">
      <div className="footerContent">
        <div>
          <Link aria-label="Go to homepage">
            <img src="./logo.webp" alt="logo" width={200} />
          </Link>
          <p>
            Discover trending games, upcoming releases, and top-rated titles
            across all platforms.
          </p>
        </div>
        <div className="footerLinks">
          <Links />
          <div className="personalLinks">
            <a
              target="_blank"
              href="https://mohamad-taha.github.io/portfolio/"
              aria-label="Open Portfolio (new tab)"
            >
              Portolio
            </a>
            <a
              target="_blank"
              href="https:www.linkedin.com/in/mohamadtahakasir"
              aria-label="Open Linkedin (new tab)"
            >
              Linkedin
            </a>
            <a
              target="_blank"
              href="https://github.com/mohamad-taha"
              aria-label="Open Github (new tab)"
            >
              Github
            </a>
            <a
              target="_blank"
              href="https://wa.me/963935447842"
              aria-label="Open Whatsapp (new tab)"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
      <p> © {currentYear} GameScope. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
