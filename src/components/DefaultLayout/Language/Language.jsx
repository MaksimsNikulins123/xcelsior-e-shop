import { Link } from "react-router-dom";
import styles from './Languages.module.scss';

export default function Language(props) {
    
    const handleLanguage = (e) => {
        let languageValue = e.target.innerHTML.replace(" ", "").toLowerCase()
        props.toggleLanguage(languageValue);
        props.filterLanguages(languageValue);
    }

    return (
        <div className={styles.languages}>
            {props.filteredLanguagesArray.map((language, index) => (
                <Link key={index} to={`/shop`} onClick={handleLanguage}>{language.toUpperCase()} </Link>
            ))}
        </div>

    )
}