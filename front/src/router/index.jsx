import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"
import Root from "../layout/layout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
])

export default router