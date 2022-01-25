import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./store";
import App from "../components/App.jsx";
import Login from "../components/Login.jsx";

import "./styles.css"

ReactDOM.render(
  //<Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
        {/* <Route path="/main" element={<MainContainer />}></Route>
        <Route path="/signup" element={<SignUp />}></Route> */}
      </Routes>
    </BrowserRouter>,
  //// </Provider>
  document.getElementById("root")             
);
