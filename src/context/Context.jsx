import { createContext, useState } from "react";

// إنشاء Context عام للمشروع
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // state للتحكم بإظهار/إخفاء الـ sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Context.Provider
      value={{
        // قيمة حالة الـ sidebar (مفتوح / مغلق)
        showSidebar,

        // دالة تغيير الحالة
        setShowSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
