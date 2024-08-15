import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Contcatus from "../module/ContactUs";
import Privacypage from "../module/Privacypage";
import Terms from "../module/terms";
import Amlpolicy from "../module/amlpolicy";
import Deposit from "../module/deposit";
import Restrictedpolicy from "../module/Restrictedcountry";
import Riskdisclosure from "../module/Riskdisclosure";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contactus",
        element: <Contcatus />,
      },

      {
        path: "/privacypage",
        element: <Privacypage />,
      },

      {
        path: "/terms",
        element: <Terms />,
      },

      {
        path: "/amlpolicy",
        element: <Amlpolicy />,
      },

      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/restrictedpolicy",
        element: <Restrictedpolicy />,
      },
      {
        path: "/riskdisclosure",
        element: <Riskdisclosure />,
      },
    ],
  },
]);

export default router;
