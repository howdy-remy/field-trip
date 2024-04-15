import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Packs } from "./pages/Packs";
import { Pack } from "./pages/Pack";
import { Gear } from "./pages/Gear";
import { Trips } from "./pages/Trips";
import { Account } from "./pages/Account";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Packs />,
  },
  {
    path: "/packs",
    element: <Packs />,
  },
  {
    path: "packs/:id",
    element: <Pack />,
  },
  {
    path: "gear",
    element: <Gear />,
  },
  {
    path: "trips",
    element: <Trips />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
