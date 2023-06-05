// import styles from './Languages.module.scss';
// import SignupFormikFormContainer from './SignupFormikFormContainer';
import Congratulation from './Congratulation';
import SignupFormikForm from './SignupFormikForm';

export default function SignUpForm(props) {

    return (
        <>
        {
            props.signUpSeccess
            ?
            <Congratulation />
            :
            <SignupFormikForm loading={props.loading} submitForm={props.submitForm}/>
        }
        </> 
    )
}