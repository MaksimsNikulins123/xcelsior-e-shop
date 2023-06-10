import { connect } from 'react-redux'
import { compose } from 'redux'
import DefaultLayout from './DefaultLayout';

const mapStateToProps = (state) => {
    return {
        loginSeccess: state.loginForm.loginSeccess
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const DefaultLayoutContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(DefaultLayout) 

export default DefaultLayoutContainer