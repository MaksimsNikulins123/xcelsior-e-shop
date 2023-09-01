import React from 'react';
import styles from './Cart.module.scss';
import { Link } from "react-router-dom";

const Cart:React.FunctionComponent = () =>(
    <div className={styles.cart}>
        <Link to="/cart">Cart</Link>
    </div>
    )

export default Cart;