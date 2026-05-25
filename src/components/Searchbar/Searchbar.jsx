import { useState } from "react";
import "./Searchbar.css";

const Searchbar = ({ value, setSearchParams }) => {
  const [gameName, setGameName] = useState(value || "");

  const handleSubmit = (e) => {
    // منع الصفحة من إعادة التحميل عند إرسال النموذج
    e.preventDefault();

    setSearchParams((prev) => {
      // إذا كان نص البحث فارغاً بعد حذف المسافات الزائدة
      if (gameName.trim() === "") {
        // احذف متغير البحث من الرابط (URL)
        prev.delete("search");
      } else {
        // أضف نص البحث الجديد إلى الرابط (URL)
        prev.set("search", gameName);
      }

      // أعد ضبط رقم الصفحة إلى 1 دائماً عند إجراء بحث جديد
      prev.set("page", "1");

      // حفظ وتحديث الرابط
      return prev;
    });
  };

  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <input
        key={gameName}
        autoComplete="off"
        className="searchInput"
        type="text"
        placeholder="Search games..."
        name="searchQuery"
        onChange={(e) => setGameName(e.target.value)}
        value={gameName}
      />

      <button className="primaryBtn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
