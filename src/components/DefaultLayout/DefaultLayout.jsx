import { Navigate, Outlet } from "react-router-dom";
import styles from './DefaultLayout.module.scss';
import LoginButton from './LoginButton/LoginButton';
import Logo from './Logo/Logo';
import { useStateContext } from "../../contexts/ContextProvider";
import NavigationBar from "./NavigationBar/NavigationBar";
import AllRightReserved from "./AllRightReserved/AllRightReserved";
import Cart from './Cart/Cart';
import LanguageContainer from './Language/LanguageContainer';



export default function DefaultLayout() {

    const { user, token } = useStateContext();
    // debugger
    console.log(token)
    if (token === 'admin') {
        return <Navigate to="/admin" />
    }
    if (token === 'manager') {
        return <Navigate to="/manager" />
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Logo />
                <NavigationBar />
                <Cart />
                <LoginButton />
                <LanguageContainer />
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <div>
                    <AllRightReserved />
                </div>
            </footer>
        </div>
    )
}