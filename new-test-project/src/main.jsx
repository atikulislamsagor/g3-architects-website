import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Heroregister from './components/Heroregister/Heroregister.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path:'/Heroregister',
        element: <Heroregister></Heroregister>
      },
      {
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
