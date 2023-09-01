import React from 'react';
import styles from './Logo.module.scss';

const Logo:React.FunctionComponent = () => (
    <div className={styles.logo}>
        <img  src="/x-logo.svg" alt="xcelsior logo" />
    </div>  
    )
   
export default Logo;