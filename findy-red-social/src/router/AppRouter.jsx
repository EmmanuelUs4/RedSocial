import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/home"
import Details from "../pages/Details/details";
import Register from "../pages/Register/Register"
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile"


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:postId" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
