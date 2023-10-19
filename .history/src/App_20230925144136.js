/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Screens/Home";
import Footer from './Components/Footer/Footer'
import Category from "./Screens/Category";
import Wishlist from "./Screens/Wishlist";
import Cart from "./Screens/Cart";
import Address from "./Screens/Address";

import './CSS/Header.css'
import './CSS/carousel.css'
import './CSS/style.css'
import './CSS/footer.css'
import Payment from "./Screens/Payment";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
