const SIGNUP_SECCESS = 'SIGNUP-SECCESS';

let initialState = {
    signupSeccess: false
}

const signUpFormReducer = (state = initialState, action: any) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SIGNUP_SECCESS:
            stateCopy.signupSeccess = action.value;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const ToggleSignupSeccessActionCreator = (value: any) => {
    return {
        type: SIGNUP_SECCESS,
        value: value
    }
}
export default signUpFormReducer;