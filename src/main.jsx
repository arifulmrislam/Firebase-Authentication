import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Register from './components/Register.jsx/Register';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';


const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home>
            </Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
    ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    </AuthProvider>
);
