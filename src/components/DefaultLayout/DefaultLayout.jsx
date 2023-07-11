import { Outlet } from "react-router-dom";
import styles from './DefaultLayout.module.scss';
import LoginButton from './LoginButton/LoginButton';
import Logo from './Logo/Logo';
import NavigationBar from "./NavigationBar/NavigationBar";
import AllRightReserved from "./AllRightReserved/AllRightReserved";
import Cart from './Cart/Cart';
import LanguageContainer from './Language/LanguageContainer';
import LogoutButtonContainer from "./LogoutButton/LogoutButtonContainer";
import Mode from './Mode/Mode';
import UserStatusContainer from "./UserStatus/UserStatusContainer";
import { useStateContext } from "../../contexts/ContextProvider";



export default function DefaultLayout(props) {
   
    const {color} = useStateContext();

    return (
        <div 
        // className={styles.container} 
        className={`${styles.container} ${ color ? styles.darkmode : styles.lightmode}`}
        >
            <header 
            // className={styles.header}
            className={`${styles.header} ${ color ? styles.darkmode : styles.lightmode}`}
            >
                <Logo />
                <NavigationBar />
                <Cart />
                {
                    props.loginSeccess
                    ?
                    <LogoutButtonContainer />
                    :
                    <LoginButton />
                }
                
                <LanguageContainer />
                <UserStatusContainer />
                <Mode />
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            
            <footer 
            // className={styles.footer}
            className={`${styles.footer} ${ color ? styles.darkmode : styles.lightmode}`}
            >
                <div>
                    <AllRightReserved />  
                </div>       
            </footer>
        </div>
    )
}