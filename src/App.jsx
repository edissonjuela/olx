import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLoyut";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
