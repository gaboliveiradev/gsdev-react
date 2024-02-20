import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

const Routing = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
        </Routes>
    )
};

export default Routing;