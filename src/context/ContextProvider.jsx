import { useState } from "react";
import { Context } from "./Context.jsx";

export const ContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Context.Provider
      value={{
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
