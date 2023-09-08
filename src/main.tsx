import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home.tsx'
import Login from './components/Login.tsx';
import Register from './components/Register.tsx';
import Logedin from './components/Logedin.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"login",
    element: <Login/>
  },
  {
    path:"register",
    element: <Register/>
  },
  {
    path:"logedin",
    element: <Logedin/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
