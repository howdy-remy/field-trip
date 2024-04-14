import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Packs } from './pages/Packs';
import { Pack } from "./pages/Pack";
import { Gear } from "./pages/Gear";
import { Trips } from "./pages/Trips";
import { Account } from "./pages/Account";

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
    element: <Pack />
  },
  {
    path: "gear",
    element: <Gear />
  },
  {
    path: "trips",
    element: <Trips />
  },
  {
    path: "account",
    element: <Account />
  }
]);

function Routes() {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;