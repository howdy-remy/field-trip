import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Packs } from './pages/Packs';
import { Pack } from "./pages/Pack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Packs />,
  },
  {
    path: ":id",
    element: <Pack />
  }
]);

function Routes() {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;