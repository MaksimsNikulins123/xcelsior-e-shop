import { connect } from 'react-redux'
import { compose } from 'redux'
import { ToggleSignupSeccessActionCreator } from '../../redux/signupform-reducer';
import LoginFormikForm from './LoginFormikForm';

const mapStateToProps = (state) => {
    return {
     
     
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUpSeccess: () => {dispatch(ToggleSignupSeccessActionCreator(false))}
    }
}

const LoginFormContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginFormikForm) 

export default LoginFormContainer