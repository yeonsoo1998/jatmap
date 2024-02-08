import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/toolbar/toolbar";
import ExchangeRate from "./components/exchange/exchange";

function App() {
  return (
    <>
      <Toolbar />
      <ExchangeRate />
    </>
  );
}

export default App;
