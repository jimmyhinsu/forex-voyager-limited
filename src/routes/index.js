import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Contcatus from "../module/ContactUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/contactus",
                element: <Contcatus />
            }
        ]
    }
]);

export default router;