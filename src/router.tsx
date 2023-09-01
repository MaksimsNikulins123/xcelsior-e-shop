import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./views/NotFound";
import Cart from './views/Cart';
import Payment from './views/Payment';
import Manager from './views/Manager';
import ManagerLayout from './components/ManagerLayout/ManagerLayout';
import Katalog from './components/DefaultLayout/NavigationBar/Katalog/Katalog';
import Shop from './components/DefaultLayout/Shop/Shop';
import AboutUs from './components/DefaultLayout/NavigationBar/AboutUs/AboutUs';
import Team from './components/DefaultLayout/NavigationBar/Team/Team';
import Blog from './components/DefaultLayout/NavigationBar/Blog/Blog';
import Projects from './components/DefaultLayout/NavigationBar/Projects/Projects';
import Contacts from './components/DefaultLayout/NavigationBar/Contacts/Contacts';
import SignUpFormContainer from "./components/SignupLayout/SignUpFormContainer";
import DefaultLayoutContainer from "./components/DefaultLayout/DefaultLayoutContainer";
import LoginFormikFormContainer from "./components/LoginLayout/LoginFormikFormContainer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayoutContainer />,
        children: [
            {
                path: '/',
                element: <Navigate to="/shop" />
            },

            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/en/shop",
                element: <Shop />
            },
            {
                path: "/katalog",
                element: <Katalog />
            },
            {
                path: '/aboutus',
                element: <AboutUs />
            },
            {
                path: '/team',
                element: <Team />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/contacts',
                element: <Contacts />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/payment',
                element: <Payment />
            },
            {
                path: '/login',
                element: <LoginFormikFormContainer />
            },
            {
                path: '/signup',
                element: <SignUpFormContainer />
            },
            
        ]

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
    // {
    //     path: '/',
    //     element: <AdminLayoutContainer />,
    //     children: [
    //         {
    //             path: '/',
    //             element: <Navigate to="/admin" />
    //         },
    //         {
    //             path: '/admin',
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