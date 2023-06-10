import { connect } from 'react-redux'
import { compose } from 'redux'
import Welcome from './Welcome';

const mapStateToProps = (state) => {
    return {
        loginUserRights: state.loginForm.loginUserRights
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const WelcomeContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Welcome) 

export default WelcomeContainer