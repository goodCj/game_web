import React from "react";
import ReactDOM from "react-dom/client";
import RoutePage from "./router";
import "./global.less";
import Gohome from "./pages/components/goHome";
import Footer from "./pages/components/footer";
import "lib-flexible";

const App = () => {
  return (
    <>
      <Gohome />
      <RoutePage />
      <Footer></Footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
