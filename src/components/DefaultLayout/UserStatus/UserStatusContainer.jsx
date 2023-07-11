import { connect } from 'react-redux';
import { compose } from 'redux';
import UserStatus from './UserStatus';

const mapStateToProps = (state) => {
    // debugger
    return {
        loginUserRights: state.loginForm.loginUserRights,
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return { 
        
    }
}

const UserStatusContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UserStatus)


export default UserStatusContainer;