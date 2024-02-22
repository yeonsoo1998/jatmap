import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Spa1 from "./pages/spa/spa1";
import Spa2 from "./pages/spa/spa2";
import Spa3 from "./pages/spa/spa3";
import SelectLocal from "./components/selectLocal/selectLocal";
import reportWebVitals from "./reportWebVitals";
import Activity from "./pages/activity/activity";
import BeppuYufuin from "./pages/selectedLocal/beppuYufuin";
import Tokyo from "./pages/selectedLocal/tokyo";
import KyotoOsaka from "./pages/selectedLocal/kyotoOsaka";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/spa1" element={<Spa1 />} />
      <Route path="/spa2" element={<Spa2 />} />
      <Route path="/spa3" element={<Spa3 />} />

      <Route path="/activity" element={<Activity />} />
      <Route path="/activity/1" element={<Activity category="activity1" />} />
      <Route path="/activity/2" element={<Activity category="activity2" />} />
      <Route path="/activity/3" element={<Activity category="activity3" />} />
      
      <Route path="/selectlocal" element={<SelectLocal/>}/>

      <Route path="/kyotoOsaka" element={<KyotoOsaka/>}/>
      <Route path="/tokyo" element={<Tokyo/>}/>
      <Route path="/beppuYufuin" element={<BeppuYufuin/>}/>


    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
