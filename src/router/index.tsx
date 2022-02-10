import { Navigate } from "react-router-dom";
import EmptyLayout from "../components/Layouts/EmptyLayout/EmptyLayout";
import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TodoPage from "../pages/TodoPage/TodoPage";
import UserPage from "../pages/User/UserPage";
import UserItemPage from "../pages/UserItemPage/UserItemPage";


export const routerPrivate = [
  {
    path: '/', 
    element: <MainLayout />,
    children: [
      {path: '/users', element: <UserPage />},
      {path: '/home', element: <HomePage />},
      {path: '/', element: <Navigate to="/home" />},
      {path: '/users/:id', element: <UserItemPage />},
      {path: '/todos', element: <TodoPage />},
    ]
  },
  {path: '*', element: NotFoundPage},
]

export const routerPublic = [
  {
    path: '/', 
    element: <EmptyLayout />,
    children: [
      {path: '/', element: <Navigate to="/login" />},
      {path: '/login', element: <LoginPage />},
    ]
  },
  {path: '*', element: <NotFoundPage/>},
]