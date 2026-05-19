import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";

const Routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
  {
    basename: "/GameScope/",
  },
);
export default Routes;
