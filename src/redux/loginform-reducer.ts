const LOGIN_SECCESS = 'LOGIN-SECCESS';
const TOGGLE_LOGIN_USER_RIGHTS = 'TOGGLE-LOGIN-USER-RIGHTS';
const SET_LOGIN_USER_ACCESS_TOKEN = 'SET-LOGIN-USER-ACCESS-TOKEN';

let initialState = {
    loginSeccess: false,
    loginUserRights: 'guest',
    loginUserAccessToken: null

}

const loginFormReducer = (state = initialState, action: any) => {
    let stateCopy = {...state};
    switch (action.type) {
        case LOGIN_SECCESS:
            stateCopy.loginSeccess = action.value;
            return stateCopy;
        case TOGGLE_LOGIN_USER_RIGHTS:
            stateCopy.loginUserRights = action.value;
            return stateCopy;
        case SET_LOGIN_USER_ACCESS_TOKEN:
            stateCopy.loginUserAccessToken = action.value;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const ToggleLoginSeccessActionCreator = (value: any) => {
    return {
        type: LOGIN_SECCESS,
        value: value
    }
}
export const ToggleLoginUserRightsActionCreator = (value: any) => {
    return {
        type: TOGGLE_LOGIN_USER_RIGHTS,
        value: value
    }
}
export const SetLoginUserAccessTokenActionCreator = (value: any) => {
    return {
        type: SET_LOGIN_USER_ACCESS_TOKEN,
        value: value
    }
}
export default loginFormReducer;