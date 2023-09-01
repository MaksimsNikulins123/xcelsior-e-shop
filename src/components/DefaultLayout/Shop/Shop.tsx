import React from 'react';
import CarouselBox from './CarouselBox/CarouselBox';
import styles from './Shop.module.scss';

const Shop:React.FunctionComponent = () =>(
        <div className={styles.shop}>
            <CarouselBox />
        </div>
    )
export default Shop;