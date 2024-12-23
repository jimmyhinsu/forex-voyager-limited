import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/aplloClient";
// import "./style/theme.scss"

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
    return () => {
      Aos.refresh();
    };
  }, []);
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}
export default App;
