import { Navigate, Outlet } from "react-router-dom";
import styles from './DefaultLayout.module.scss';
import Shop from './Shop/Shop';
import LoginButton from './LoginButton/LoginButton';
import ShopName from './ShopName/ShopName';
import Logo from './Logo/Logo';
import { useStateContext } from "../../contexts/ContextProvider";


export default function DefaultLayout() {

    const { user, token } = useStateContext();
    debugger
    console.log(token)
    if (token === 'admin'){ 
        return <Navigate to="/admin" />
    }
    if(token === 'manager') {
        return <Navigate to="/manager" />
    }
    
    
    // if(token === 'manager') {
    //     return <Navigate to="/staff/manager" />
    // }

    return (
        <div className={styles.defaultLayout}>
            DefaultLayout
            <header >
                <div>
                    <Logo />
                </div>
                <div>
                    <ShopName />
                </div>
                <div>
                    <LoginButton />
                </div>
            </header>
            <nav>
                <div>
                    Katalog
                </div>
                <div>
                    About us
                </div>
                <div>
                    Contacts
                </div>

            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}