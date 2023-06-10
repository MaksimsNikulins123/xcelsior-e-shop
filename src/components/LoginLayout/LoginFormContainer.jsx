import { connect } from 'react-redux'
import { compose } from 'redux'
import { ToggleSignupSeccessActionCreator } from '../../redux/signupform-reducer';
import { LoginFormThunkCreator } from '../../redux/thunks/LoginFormThunkCreator';
import LoginForm from './LoginForm';

const mapStateToProps = (state) => {
    return {
        loading: state.loading.loading,
        loginSeccess: state.loginForm.loginSeccess
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUpSeccess: () => {dispatch(ToggleSignupSeccessActionCreator(false))},
        submitForm: (data) => {dispatch(LoginFormThunkCreator(data))}
    }
}

const LoginFormContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm) 

export default LoginFormContainer