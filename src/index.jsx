import React from "react";
import ReactDOM from "react-dom/client";
import RoutePage from "./router";
import "./global.less";
import "lib-flexible";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RoutePage />);
