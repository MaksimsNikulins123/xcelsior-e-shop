import { connect } from 'react-redux'
import { compose } from 'redux'
import LogoutButton from './LogoutButton';
import { LogoutThunkCreator } from '../../../redux/thunks/LogoutThunkCreator';

const mapStateToProps = (state: any) => {
    return {
        
    }
    
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        // toggleLoginSeccess: () => {dispatch(ToggleLoginSeccessActionCreator(false))}
        logout: () => {dispatch(LogoutThunkCreator())}
    }
}

const LogoutButtonContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LogoutButton) 

export default LogoutButtonContainer