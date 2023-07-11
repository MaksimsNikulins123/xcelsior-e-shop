import styles from './UserStatus.module.scss';


export default function UserStatus(props) {
    return (
            <div className={styles.loginUserRights}>
                <span className={styles.popUp}>{props.loginUserRights}</span>
                <img src={`/${props.loginUserRights}.svg`} alt={`${props.loginUserRights} logo`}/>
            </div>   
              
    )
}
