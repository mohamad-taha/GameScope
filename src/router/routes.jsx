import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Game from "../pages/Game/Game";

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
        {
          path: "games/:id",
          element: <Game />,
        },
      ],
    },
  ],
  {
    basename: "/GameScope/",
  },
);
export default Routes;
