import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Links from "../Links/Links";
import SidebarBtn from "../SidebarBtn/SidebarBtn";
import logo from "../../assets/imgs/logo.webp";
import "./Navbar.css";

const Navbar = () => {
  // state بيحدد إذا الصفحة تم التمرير فيها (scroll effect)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // دالة بتراقب scroll position تبع الصفحة
    const handleScroll = () => {
      // إذا المستخدم نزل تحت (scrollY > 0) بنفعّل تأثير navbar
      setScrolled(window.scrollY > 0);
    };

    // إضافة event listener لمراقبة scroll
    window.addEventListener("scroll", handleScroll);

    // cleanup: إزالة الـ listener لمن يترك component
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navScrolled" : ""}>
      {/* رابط يرجعك للصفحة الرئيسية */}
      <Link to={"/"} aria-label="Go to homepage">
        {/* لوجو الموقع */}
        <img
          style={{ objectFit: "cover" }}
          width={150}
          height={70}
          src={logo}
          alt="Logo"
        />
      </Link>

      {/* روابط النافبار الرئيسية */}
      <div className="navLinks">
        <Links />
      </div>

      {/* زر sidebar (غالباً للموبايل) */}
      <SidebarBtn />
    </nav>
  );
};

export default Navbar;
