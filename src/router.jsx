import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./components/LoginLayout/Login.jsx";
import NotFound from "./views/NotFound";
import Shop from "./components/DefaultLayout/Shop/Shop";
import Signup from "./components/SignupLayout/Signup";
import Cart from './views/Cart';
import Payment from './views/Payment';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import Manager from './views/Manager';
import Admin from './views/Admin';
import ManagerLayout from './components/ManagerLayout/ManagerLayout';
import AdminLayout from './components/AdminLayout/AdminLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/shop" />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/payment',
                element: <Payment />
            }
        ]

    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/',
        element: <ManagerLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/manager" />
            },
            {
                path: '/manager',
                element: <Manager />
            },
            
        ]
    },
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/admin" />
            },
            {
                path: '/admin',
                element: <Admin />
            },
            
        ]
    },
    
    // {
    //     path: '/manager',
    //     element: <Manager />
    // },
    // {
    //     path: '/admin',
    //     element: <Admin />
    // },
    // {
    //     path: '/',
    //     element: <StaffLayout />,
    //     children: [
    //         {
    //             path: '/manager',
    //             element: <Manager />
    //         },
    //         {
    //             path: '/admin',
    //             element: <Admin />
    //         },
    //     ]
    // },
    // {
    //     path: '/staff',
    //     element: <StaffLayout />,
    //     children: [
    //         {
    //             path: '/staff/manager',
    //             element: <Manager />
    //         },
    //         // {
    //         //     path: '/admin',
    //         //     element: <Admin />
    //         // },
    //     ]
    // },
    // {
    //     path: '/staff',
    //     element: <StaffLayout />,
    //     children: [
    //         // {
    //         //     path: '/manager',
    //         //     element: <Manager />
    //         // },
    //         {
    //             path: '/staff/admin',
    //             element: <Admin />
    //         },
    //     ]
    // },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;