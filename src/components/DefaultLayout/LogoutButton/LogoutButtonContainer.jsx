import { connect } from 'react-redux'
import { compose } from 'redux'
import LogoutButton from './LogoutButton';
import { ToggleLoginSeccessActionCreator } from './../../../redux/loginform-reducer';

const mapStateToProps = (state) => {
    return {
        
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleLoginSeccess: () => {dispatch(ToggleLoginSeccessActionCreator(false))}
    }
}

const LogoutButtonContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LogoutButton) 

export default LogoutButtonContainer