import React, { FC } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout/MainLayout';
import EmptyLayout from './components/Layouts/EmptyLayout/EmptyLayout';
import { routerPrivate, routerPublic } from './router';


const Routing:FC = () => {
const auth = false
const checkAuth = auth ? routerPrivate : routerPublic
const RoutersComponents = () => useRoutes(checkAuth)
  return (
    <BrowserRouter>
      <RoutersComponents />
    </BrowserRouter>
  );
};

export default Routing;