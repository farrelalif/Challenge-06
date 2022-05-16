import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { DashboardAdmin } from "../../View/DashboardAdmin/DashboardAdmin";
import { LandingCar } from "../../View/Landingcar/LandingCar";
import { Login } from "../../View/Login/Login";
import { SignUp } from "../../View/SignUp/SignUp";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="login" element={<Login />} />
        <Route path="landingcar" element={<LandingCar />} />
        <Route path="admin" element={<DashboardAdmin />} />
      </Routes>
    </div>
  );
};
