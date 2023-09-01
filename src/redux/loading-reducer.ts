const TOGGLE_LOADING = 'TOGGLE-LOADING';

let initialState = {
   loading: false
}

const loadingReducer = (state = initialState, action: any) => {
    let stateCopy = {...state};
    switch (action.type) {
        case TOGGLE_LOADING:
            stateCopy.loading = action.value;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const ToggleLoadingActionCreator = (value: any) => {
    return {
        type: TOGGLE_LOADING,
        value: value
    }
}
export default loadingReducer;