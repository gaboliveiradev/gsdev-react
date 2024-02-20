import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Routing = () => {
    return (
        <Routes>
            <Route element={<h1>Rota teste</h1>} path="/" />
        </Routes>
    )
};

export default Routing;