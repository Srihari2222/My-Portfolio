import React from "react";
import ReactDOM from "react-dom/client";
import Mobile  from "./mobile/Mobile.jsx";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {window.innerWidth > 768? <App/>:<Mobile/>}
  </React.StrictMode>
);
