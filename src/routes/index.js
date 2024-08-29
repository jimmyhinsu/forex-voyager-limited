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
import Errorpage from "../components/Errorpage";
import Forexproducts from "../module/forexproducts";
import Metals from "../module/metals";
import Shares from "../module/shares";
import Indices from "../module/indices";
import Commodities from "../module/commodities";
import Cryptocurrencies from "../module/cryptocurrencies";
import Regulations from "../module/regulations";
import Whyforexvoyager from "../module/whyforexvoyager";

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
      {
        path: "/forexproducts",
        element: <Forexproducts />
      },
      {
        path: "metals",
        element: <Metals />
      },
      {
        path: "shares",
        element: <Shares />
      },
      {
        path: "indices",
        element: <Indices />
      },
      {
        path: "commodities",
        element: <Commodities />
      },
      {
        path: "cryptocurrencies",
        element: <Cryptocurrencies />
      },
      {
        path: "regulations",
        element: <Regulations />
      },
      {
        path: "whyforexvoyager",
        element: <Whyforexvoyager />
      },
    ],
  },
  {
    path: "*",
    element: <Errorpage />
  }
]);
export default router;
