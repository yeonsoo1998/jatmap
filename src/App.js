import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/toolbar/toolbar";
import MainCarousel from "./components/carousel/carousel";
import ExchangeRate from "./components/exchange/exchange";


function App() {
  return (
    <>
      <Toolbar />

      <MainCarousel/>
      <ExchangeRate />
    </>
  );
}

export default App;
