import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './assets/Root/Root.jsx'
import Home from './assets/Home/Home.jsx'
import About from './assets/About/About.jsx'
import Invoice from './assets/Invoice/Invoice.jsx'
import Order from './assets/Order/Order.jsx'
import "@smastrom/react-rating/style.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://fakestoreapi.com/products"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/invoice",
        element: <Invoice></Invoice>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router}></RouterProvider>
  </React.StrictMode>,
)
