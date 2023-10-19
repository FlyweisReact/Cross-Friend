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
import Orders from "./Screens/Orders";
import SingleProduct from "./Screens/SingleProduct";
import Transaction from "./Screens/Transaction";
import Login from "./Screens/Login";
import { ReactNotifications } from 'react-notifications-component'
import AddressScreen from "./Screens/AddressScreen";
import OrderSucces from "./Screens/OrderSucces";

const App = () => {
  return (
    <BrowserRouter>
    <ReactNotifications  />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/my-order" element={<Orders />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shipping-address" element={<AddressScreen /> } /> 
        <Route path="/order-success/:id" element={<OrderSucces /> } /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
