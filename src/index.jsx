import React from "react";
import ReactDOM from "react-dom/client";
import RoutePage from "./router";
import "./global.less";
import Gohome from "./pages/components/goHome";

import "lib-flexible";

const App = () => {
  return (
    <>
      <Gohome />
      <RoutePage />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
