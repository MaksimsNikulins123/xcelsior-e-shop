import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

// import Logo from './DefaultLayout/Logo/Logo';
// import ShopName from './DefaultLayout/ShopName/ShopName';
// import LoginButton from './DefaultLayout/LoginButton/LoginButton';

export default function ManagerLayout() {

     const {user, token} = useStateContext();
    //  debugger
    console.log(token)
    if(token === 'guest' || token === null) {
        return <Navigate to="/" />
    }
    if(token === 'admin') {
        return <Navigate to="/admin" />
    }
   
    
    return (
        <>
        ManagerLayout
      
            <main>
                <Outlet />
            </main>
        </>
    )
}