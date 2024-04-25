import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Login from '../pages/login/login';
import Home from '../pages/home/home';
import Details from '../pages/details/details';
import Register from '../pages/register/register';
import Profile from '../pages/profile/profile'
import EditProfile from '../pages/editProfile/editProfile';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="details" element={<Details />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/editprofile" element={<EditProfile />} />


                </Route>
            </Routes>
        </BrowserRouter>


    )
}

export default AppRouter;