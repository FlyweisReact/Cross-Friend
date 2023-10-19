/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home";
import Footer from './Components/Footer/Footer'
import Category from "./Screens/Category";
import Wishlist from "./Screens/Wishlist";

import './CSS/Header.css'
import './CSS/carousel.css'
import './CSS/style.css'
import './CSS/footer.css'
import Cart from "./Screens/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
