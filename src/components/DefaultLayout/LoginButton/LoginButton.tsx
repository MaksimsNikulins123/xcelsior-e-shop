import React from 'react';
import styles from './Login.module.scss';
import { Link } from "react-router-dom";

const LoginButton:React.FunctionComponent = () =>(
    <div className={styles.login}>
        <Link to="/login">Login</Link>
    </div>
    )

export default LoginButton;