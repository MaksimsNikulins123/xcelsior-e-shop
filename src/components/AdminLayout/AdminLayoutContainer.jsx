import { connect } from 'react-redux'
import { compose } from 'redux'
import AdminLayout from './AdminLayout';


const mapStateToProps = (state) => {
    return {
        userStatus: state.authUser.userStatus,
        // accessToken: state.authUser.accessToken,
        // loginSeccess: state.loginForm.loginSeccess
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const AdminLayoutContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AdminLayout) 

export default AdminLayoutContainer