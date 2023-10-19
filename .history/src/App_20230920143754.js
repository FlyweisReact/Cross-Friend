/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";

const App = () => {
  return (
    <BrowserRouter>
    <Head
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
