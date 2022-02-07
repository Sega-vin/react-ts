import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage.';
import TodoPage from './pages/TodoPage';
import UserItemPage from './pages/UserItemPage';
import UserPage from './pages/UserPage';
import './styles/app.scss'

function App() { 

  return (
    <BrowserRouter>
      <div>
        <Header />       
        <Routes>
          <Route path={'/users'} element={<UserPage/>}/>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path="/users/:id" element={<UserItemPage/>}/>
          <Route path={'/todos'} element={<TodoPage/>} />  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
