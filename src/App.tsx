import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route,NavLink, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import UserItemPage from './pages/UserItemPage';
import UserPage from './pages/UserPage';

function App() { 

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Пользователи</NavLink>
          <NavLink to="/todos">Задачи</NavLink>
        </div>
        <Routes>
          <Route path={'/users'} element={<UserPage/>}/>
          <Route path="/users/:id" element={<UserItemPage/>}/>
          <Route path={'/todos'} element={<TodoPage/>} />  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
