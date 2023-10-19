/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home";
import Footer from './Components/Footer/Footer'
import './CSS/Header.css'
import './CSS/carousel.css'
import './CSS/style.css'
import './CSS/footer.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=""
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
