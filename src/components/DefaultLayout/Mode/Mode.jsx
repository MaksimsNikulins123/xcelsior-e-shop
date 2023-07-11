import styles from './Mode.module.scss';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function Mode() {

    const {color, setColor} = useStateContext();

    const toggleMode = () => {
        // setMode(!mode)
        setColor(!color)
    }

    return (
        <div className={styles.mode}>
            <div className="form-check form-switch">
                <input className={`form-check-input ${styles.input}`} type="checkbox" id="flexSwitchCheckChecked" checked={color} onChange={toggleMode} />
            </div>
            <div>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{color ? "dark" : "light"}</label>
            </div>
        </div>
    )
}