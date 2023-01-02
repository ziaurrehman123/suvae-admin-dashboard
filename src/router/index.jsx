import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ClientDashboard from "../pages/ClientDashboard";


const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        
      </Routes>
    </>
  );
};

export default Routers;
