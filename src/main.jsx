import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        children: [
            { path: "home", element: <HomePage />},
            { path: "shop", element: <ShopPage />}
        ]
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
