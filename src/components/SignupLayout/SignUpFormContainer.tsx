import { connect } from 'react-redux'
import { compose } from 'redux'
import { SubmitFormThunkCreator } from '../../redux/thunks/SubmitFormThunkCreator';
import SignUpForm from './SignUpForm';


const mapStateToProps = (state: any) => {
    return {
        loading: state.loading.loading,
        signUpSeccess: state.signUpForm.signupSeccess
     
    }
    
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        submitForm: (data: any) => {dispatch(SubmitFormThunkCreator(data))}
    }
}

const SignUpFormContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SignUpForm) 

export default SignUpFormContainer