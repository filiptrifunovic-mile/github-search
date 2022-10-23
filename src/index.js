import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { GithubProvider } from "./context/context.js";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ai4iv8tf.us.auth0.com"
    clientId="itxP2oXKt6O00qNNekV6J4mRV1Swm0eV"
    redirectUri={window.location.origin}
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);
