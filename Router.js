import Login from './src/about/Login/Login';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
