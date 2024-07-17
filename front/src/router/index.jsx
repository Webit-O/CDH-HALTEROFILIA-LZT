import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../layouts/Layout";
import About from "../pages/About/About"
import Trainings from "../pages/Trainings/Trainings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
              path: '/training',
              element: <Trainings />
            },
            {
              path: '/about',
              element: <About />
          }
        ]
    }
]);

export default router