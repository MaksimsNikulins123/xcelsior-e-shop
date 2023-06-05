const SIGNUP_SECCESS = 'SIGNUP-SECCESS';

let initialState = {
    signupSeccess: false
}

const signUpFormReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SIGNUP_SECCESS:
            stateCopy.signupSeccess = action.value;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const ToggleSignupSeccessActionCreator = (value) => {
    return {
        type: SIGNUP_SECCESS,
        value: value
    }
}
export default signUpFormReducer;