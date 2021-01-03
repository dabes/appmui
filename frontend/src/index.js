import React from "react";
import ReactDOM from "react-dom";

import App from "./pages/_app";
import { Provider } from "react-redux";
import { Store } from "./store";

import "./styles/main.bundle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
