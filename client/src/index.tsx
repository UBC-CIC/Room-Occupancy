import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css"; // include CSS from Semantic
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { PubSub } from "@aws-amplify/pubsub";
import amplifyconfiguration from "./amplifyconfiguration.json";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

Amplify.configure(amplifyconfiguration); // import and load amplify configuration to app

// Apply plugin with configuration
// TODO: this should be an env variable
export const pubsub = new PubSub({
  region: "us-east-1",
  endpoint: "wss:a1z643kpwjsepe-ats.iot.us-east-1.amazonaws.com/mqtt",
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
