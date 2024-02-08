import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Spa from "./pages/spa/spa";
import reportWebVitals from "./reportWebVitals";
import Activity from "./pages/activity/activity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/spa" element={<Spa />} />
      <Route path="/spa/1" element={<Spa category="spa1" />} />
      <Route path="/spa/2" element={<Spa category="spa2" />} />

      <Route path="/activity" element={<Activity />} />
      <Route path="/activity/1" element={<Activity category="activity1" />} />
      <Route path="/activity/2" element={<Activity category="activity2" />} />
      <Route path="/activity/3" element={<Activity category="activity3" />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
