import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../layouts/Layout";
import About from "../pages/About/About"
import Retail from "../pages/Retail/Retail";

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
              path: '/about',
              element: <About />
            },
            {
                path: '/retail',
                element: <Retail />
            }
        ]
    }
]);

export default router