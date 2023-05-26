import styles from './Logo.module.scss';

export default function Logo() {
    return (
        <div className={styles.logo}>
            {/* <a href="#"> */}
                <img  src="/x-logo.svg" alt="xcelsior logo" />
            {/* </a> */}

            {/* <img class="white-logo" src="https://www.xcelsior.lv/content/x-logo-white.svg" alt="xcelsior logo" width="150"/> */}
            {/* <img src="https://www.xcelsior.lv/assets/images/x-mini.png" alt="xcelsior logo" /> */}
        </div>
    )
}