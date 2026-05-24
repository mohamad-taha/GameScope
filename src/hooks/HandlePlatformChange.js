import { useNavigate, useSearchParams } from "react-router-dom";

// custom hook للتعامل مع تغيير المنصة
const usePlatformNavigation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handlePlatformChange = (platformId) => {
    // نسخ الـ params الحالية
    const params = new URLSearchParams(searchParams);

    // إذا اختار all نحذف platform
    if (platformId === "all") {
      params.delete("platform");
    } else {
      // إضافة platform للـ URL
      params.set("platform", platformId);
    }

    // الرجوع لأول صفحة عند تغيير المنصة
    params.set("page", 1);

    // التنقل للرابط الجديد
    navigate(`/games?${params.toString()}`);
  };

  return handlePlatformChange;
};

export default usePlatformNavigation;
