// import styles from './Languages.module.scss';
import LoginFormikForm from './LoginFormikForm';
import WelcomeContainer from './WelcomeContainer';


export default function LoginForm(props) {

    return (
        <>
        {
            props.loginSeccess
            ?
            <WelcomeContainer />
            :
            <LoginFormikForm loading={props.loading} submitForm={props.submitForm} signUpSeccess={props.signUpSeccess}/>
        }
        </> 
    )
}