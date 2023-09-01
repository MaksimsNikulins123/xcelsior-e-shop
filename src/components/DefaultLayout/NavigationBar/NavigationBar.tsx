import React from 'react';
import { Link } from "react-router-dom";
import styles from './NavigationBar.module.scss';

const NavigationBar:React.FunctionComponent = () => (
        <div className={styles.navigationBar}>
            <Link to="/shop">Home</Link>
            <Link to="/katalog">Katalog</Link>
            <Link to="/aboutus">About us</Link>
            <Link to="/team">Our team</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>    
        </div>
    )


export default NavigationBar;