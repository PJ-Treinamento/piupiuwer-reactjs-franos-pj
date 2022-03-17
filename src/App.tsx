import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./config/api";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
