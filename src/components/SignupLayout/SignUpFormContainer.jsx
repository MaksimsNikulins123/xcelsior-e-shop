import { connect } from 'react-redux'
import { compose } from 'redux'
import { SubmitFormThunkCreator } from '../../redux/thunks/SubmitFormThunkCreator';
import SignUpForm from './SignUpForm';
// import SignupForm from './SignUpForm';
// import { ToggleLoadingActionCreator } from '../../redux/loading-reducer';
// import SignupFormikForm from './SignupFormikForm';

const mapStateToProps = (state) => {
    return {
        loading: state.loading.loading,
        signUpSeccess: state.signUpForm.signupSeccess
     
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (data) => {dispatch(SubmitFormThunkCreator(data))}
    }
}

const SignUpFormContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SignUpForm) 

export default SignUpFormContainer