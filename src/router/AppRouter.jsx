import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import NewBlog from '../pages/newBlog/NewBlog';
import Profile from '../pages/profile/Profile';
import Navbar from '../components/navbar/Navbar';
import PrivateRoutes from './PrivateRoutes';
import Details from '../pages/details/Details';
import UpdateBlog from '../pages/UpdateBlog';
import Aside from '../components/aside/Aside';
import { useAuthContext } from '../context/AuthProvider';

const AppRouter = () => {
    const { currentUser } = useAuthContext();
    return (
        <BrowserRouter>
            {currentUser && <Aside />}
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/edit/:id" element={<UpdateBlog />} />
                    <Route path="/post" element={<NewBlog />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
