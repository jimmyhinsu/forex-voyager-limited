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
import Metals from "../module/metals";
import Shares from "../module/shares";
import Indices from "../module/indices";
import Commodities from "../module/commodities";
import Cryptocurrencies from "../module/cryptocurrencies";
import Regulations from "../module/regulations";
import Whyforexvoyager from "../module/whyforexvoyager";
import Meta5 from "../module/meta5";
import Webtradermeta5 from "../module/webtradermeta5";
import Forex from "../module/forex";
import Standard from "../module/standard";
import Pro from "../module/pro";
import Ecn from "../module/ecn";
import Becomeib from "../module/becomeib";

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
        path: "/forex",
        element: <Forex />
      },
      {
        path: "/metals",
        element: <Metals />
      },
      {
        path: "/shares",
        element: <Shares />
      },
      {
        path: "/indices",
        element: <Indices />
      },
      {
        path: "/commodities",
        element: <Commodities />
      },
      {
        path: "/cryptocurrencies",
        element: <Cryptocurrencies />
      },
      {
        path: "/regulations",
        element: <Regulations />
      },
      {
        path: "/whyforexvoyager",
        element: <Whyforexvoyager />
      },
      {
        path: "/meta5",
        element: <Meta5 />
      },
      {
        path: "/webtradermeta5",
        element: <Webtradermeta5 />
      },
      {
        path: "/standard",
        element: <Standard />
      },
      {
        path: "/pro",
        element: <Pro />
      },
      {
        path: "/ecn",
        element: <Ecn />
      },
      {
        path: "/becomeib",
        element: <Becomeib />
      },
      {
        path: "/introducingbrokers",
        element: <Becomeib />
      }
    ],
  },
  {
    path: "*",
    element: <Errorpage />
  }
]);
export default router;
