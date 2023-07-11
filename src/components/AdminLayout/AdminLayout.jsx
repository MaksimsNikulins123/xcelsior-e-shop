import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

// import Logo from './DefaultLayout/Logo/Logo';
// import ShopName from './DefaultLayout/ShopName/ShopName';
// import LoginButton from './DefaultLayout/LoginButton/LoginButton';

export default function AdminLayout(props) {

    //  const {user, token} = useStateContext();
    //  debugger
    // console.log(token)
    if (props.userStatus === 'guest') {
        return <Navigate to="/" />
    }
    if (props.userStatus === 'manager') {
        return <Navigate to="/manager" />
    }
    
    return (
        <>
        AdminLayout
        <Link to={`/shop`} >to shop</Link>
            <main>
                <Outlet />
            </main>
        </>
    )
}