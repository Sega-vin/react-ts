import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.';
import TodoPage from './pages/TodoPage';
import UserItemPage from './pages/UserItemPage';
import UserPage from './pages/User/UserPage';
import './styles/app.scss'
import LoginPage from './pages/LoginPage/LoginPage';

const Routing:FC = ({children}) => {
  return (
    <BrowserRouter>
      {children}
      <div>
        <Routes>
          <Route path={'/users'} element={<UserPage/>}/>
          <Route path={'/home'} element={<HomePage/>}/>
          <Route path={'/'} element={<LoginPage />}/>
          <Route path="/users/:id" element={<UserItemPage/>}/>
          <Route path={'/todos'} element={<TodoPage/>} />  
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;