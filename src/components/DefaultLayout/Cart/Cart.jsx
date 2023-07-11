import styles from './Cart.module.scss';
import { Link } from "react-router-dom";

export default function Cart(){
    return (
        <div className={styles.cart}>
            <Link to="/cart">Cart</Link>
        </div>
    )
}