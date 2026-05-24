import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Game from "../pages/Game/Game";
import Games from "../pages/Games/Games";
import UpcomingGames from "../pages/UpcomingGames/UpcomingGames";

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
          path: "games/:id",
          element: <Game />,
        },
        {
          path: "games",
          element: <Games />,
        },
        {
          path: "upcoming",
          element: <UpcomingGames />,
        },
      ],
    },
  ],
  {
    basename: "/GameScope/",
  },
);
export default Routes;
