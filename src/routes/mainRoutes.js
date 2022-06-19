import { lazy } from "react";
import Loadable from "../ui-components/Loadable";
const Comments = Loadable(lazy(() => import("../pages/Comments")));
const Feed = Loadable(lazy(() => import("../pages/Feed")));
const mainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Feed />,
    },
    {
      path: "/comments",
      element: <Comments />,
    },
  ],
};
export default mainRoutes;
