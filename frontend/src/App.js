import "./index.css";

import React from "react";
import { Outlet } from "react-router-dom";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <Outlet />
    </>
  );
}

export default App;