import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import Auth from "./Auth/Auth";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import Cart from "./Cart/Cart";
import Results from "./Results/Results";
import ProductDetail from "./ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51Q2UB007AH9vdHrcAELAE0RxGe5oKJfxA0YsReAIMfX1EW7rNy2VDKEyFLQerCykpT26euqe1SsNEIlCiAlRI3XK00NrTnhCus"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute  msg={"you must login to pay!!"}
            redirect={"/payments"}>
             

            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>

            </ProtectedRoute>
           
          }
        />
        <Route path="/orders" element={
        <ProtectedRoute  msg={"you must login to access your orders"}
        redirect={"/orders"}>
           <Orders />


        </ProtectedRoute>

         } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
