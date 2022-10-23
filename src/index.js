import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { GithubProvider } from "./context/context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GithubProvider>
    <App />
  </GithubProvider>
);
