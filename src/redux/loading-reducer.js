const TOGGLE_LOADING = 'TOGGLE-LOADING';

let initialState = {
   loading: false
}

const loadingReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case TOGGLE_LOADING:
            stateCopy.loading = !stateCopy.loading;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const ToggleLoadingActionCreator = () => {
    return {
        type: TOGGLE_LOADING,
    }
}
export default loadingReducer;