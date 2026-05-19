import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Links from "../Links/Links";
import SidebarBtn from "../SidebarBtn/SidebarBtn";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // اجعل الحالة true عندما يقوم المستخدم بالتمرير لأسفل، false عند الوصول إلى أعلى الصفحة
      setScrolled(window.scrollY > 0);
    };

    // أضف مستمع حدث التمرير عند تحميل المكون
    window.addEventListener("scroll", handleScroll);

    return () => {
      // أزل مستمع الحدث عند إلغاء تحميل المكون
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navScrolled" : ""}>
      <Link to={"/"} aria-label="Go to homepage">
        <img
          style={{ objectFit: "cover" }}
          width={150}
          height={70}
          src="./logo.webp"
          alt="Logo"
        />
      </Link>
      <div className="navLinks">
        <Links />
      </div>
      <SidebarBtn />
    </nav>
  );
};

export default Navbar;
