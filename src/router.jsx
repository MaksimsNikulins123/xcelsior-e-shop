import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./views/NotFound";
// import Signup from "./components/SignupLayout/SignupFormikForm";
import Cart from './views/Cart';
import Payment from './views/Payment';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import Manager from './views/Manager';
import Admin from './views/Admin';
import ManagerLayout from './components/ManagerLayout/ManagerLayout';
import AdminLayout from './components/AdminLayout/AdminLayout';
import Katalog from './components/DefaultLayout/NavigationBar/Katalog/Katalog';
import Shop from './components/DefaultLayout/Shop/Shop';
import AboutUs from './components/DefaultLayout/NavigationBar/AboutUs/AboutUs';
import Team from './components/DefaultLayout/NavigationBar/Team/Team';
import Blog from './components/DefaultLayout/NavigationBar/Blog/Blog';
import Projects from './components/DefaultLayout/NavigationBar/Projects/Projects';
import Contacts from './components/DefaultLayout/NavigationBar/Contacts/Contacts';
// import LoginReduxForm from './components/LoginLayout/LoginReduxForm';
// import LoginFormikForm from "./components/LoginLayout/LoginFormikForm";
// import SignupFormikForm from "./components/SignupLayout/SignupFormikForm";
// import SignupFormikFormContainer from "./components/SignupLayout/SignupFormikFormContainer";
import SignUpFormContainer from "./components/SignupLayout/SignUpFormContainer";
import LoginFormContainer from "./components/LoginLayout/LoginFormContainer";

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
                // element: <LoginReduxForm />
                // element: <LoginFormikForm />
                element: <LoginFormContainer />
            },
            {
                path: '/signup',
                // element: <SignupFormikForm />
                // element: <SignupFormikFormContainer />
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
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;