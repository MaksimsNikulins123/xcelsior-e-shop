import styles from './Login.module.scss';
import { Link } from "react-router-dom";

export default function LoginButton(){
    return (
        <div className={styles.login}>
            <Link to="/login">Login</Link>
        </div>
    )
}