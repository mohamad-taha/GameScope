import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { fetchPlatforms } from "../../service/rawg";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import usePlatformNavigation from "../../hooks/HandlePlatformChange";
import "./Menu.css";

const Menu = () => {
  const handlePlatformChange = usePlatformNavigation();

  // state بسيط لتدوير السهم وقت hover على dropdown
  const [isOver, setIsOver] = useState(false);

  // React Query: جلب منصات الألعاب من RAWG API
  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["platforms"], // مفتاح الكاش الخاص بالـ query
    queryFn: fetchPlatforms, // الدالة اللي بتجيب البيانات
  });

  return (
    <li
      onMouseMove={() => setIsOver(true)} // فتح dropdown عند hover
      onMouseLeave={() => setIsOver(false)} // إغلاق dropdown عند خروج الماوس
      className="dropDown"
    >
      Platforms
      {/* أيقونة السهم يلي بتلف حسب حالة hover */}
      <IoIosArrowUp
        style={{
          transform: isOver ? "rotate(180deg)" : "rotate(0deg)",
          transition: "200ms",
        }}
      />
      <ul className="dropDownMenu">
        {isLoading ? (
          // عرض loader أثناء تحميل البيانات
          <Loader />
        ) : error ? (
          // في حال فشل الطلب
          <li>Error loading platforms</li>
        ) : (
          // عرض قائمة المنصات
          platforms?.results.map((platform) => (
            <li key={platform.id}>
              <button
                onClick={() => handlePlatformChange(platform.id)}
                aria-label={`Filter by ${platform.name}`} // تحسين accessibility
              >
                {platform.name}
              </button>
            </li>
          ))
        )}
      </ul>
    </li>
  );
};

export default Menu;
