import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import App from "./app/App.jsx";

import "./styles.css"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")             
);

