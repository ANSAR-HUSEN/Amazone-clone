import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import SignUp from "./Auth/SignUp";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import Cart from "./Cart/Cart";
import Results from "./Results/Results";
import ProductDetail from "./ProductDetail/ProductDetail";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/auth" element={<SignUp/>} />
        <Route path="/payments" element={<Payment/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/category/:categoryName" element={<Results/>} />
        <Route path="/products/:productId" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default Routing;
