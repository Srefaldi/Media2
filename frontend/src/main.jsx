import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";  // Import Provider dari react-redux
import store from "./app/store";         // Import store Redux
import App from "./App.jsx";

import "./index.css";
import "bulma/css/bulma.css";

import axios from "axios";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Bungkus dengan Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
