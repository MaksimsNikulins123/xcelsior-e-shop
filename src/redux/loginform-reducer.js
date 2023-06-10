const LOGIN_SECCESS = 'LOGIN-SECCESS';
const TOGGLE_LOGIN_USER_RIGHTS = 'TOGGLE-LOGIN-USER-RIGHTS';
let initialState = {
    loginSeccess: false,
    loginUserRights: 'guest',

}

const loginFormReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case LOGIN_SECCESS:
            stateCopy.loginSeccess = action.value;
            return stateCopy;
        case TOGGLE_LOGIN_USER_RIGHTS:
            stateCopy.loginUserRights = action.value;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const ToggleLoginSeccessActionCreator = (value) => {
    return {
        type: LOGIN_SECCESS,
        value: value
    }
}
export const ToggleLoginUserRightsActionCreator = (value) => {
    return {
        type: TOGGLE_LOGIN_USER_RIGHTS,
        value: value
    }
}
export default loginFormReducer;