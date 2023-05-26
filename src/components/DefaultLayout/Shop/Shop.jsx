import CarouselBox from './CarouselBox/CarouselBox';
import styles from './Shop.module.scss';

export default function Shop(){
    return (
        <div className={styles.shop}>
            <CarouselBox />
        </div>
    )
}