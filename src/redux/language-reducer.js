const TOGGLE_LANGUAGE = 'TOGGLE-LANGUAGE';
const FILTER_LANGUAGES_ARRAY = 'FILTER-LANGUAGES-ARRAY';
// const IS_AUTH = 'IS-AUTH';
// const SET_USER_DATA = 'SET-USER-DATA';
// const HANDLE_LOGIN_INPUT_VALUE = 'HANDLE-LOGIN-INPUT-VALUE';
// const TOGGLE_LOADING_ANIMATION = 'TOGGLE-LOADING-ANIMATION';
// const TOGGLE_FORM = 'TOGGLE-FORM';
// const AUTHENTICATION_CUCCESSFUL = 'AUTHENTICATION-CUCCESSFUL';
// const LOGOUT_CUCCESSFUL = 'LOGOUT-CUCCESSFUL';

let initialState = {
    defaultLanguage: 'en',
    allLanguages: ['lv', 'en', 'lt', 'ru'],
    currentLanguage: 'en',
    filteredLanguagesArray: ['lv', 'lt', 'ru'],
    // authStatus: false,
    // userId: null,   
    // email: null,
    // password: null,
    // isAuth: false,
    // loading: false,
    // toggleForm: false
}

const languageReducer = (state = initialState, action) => {
    // debugger
    let stateCopy = {
        ...state
    };
    // debugger
    switch (action.type) {
        case TOGGLE_LANGUAGE:
            stateCopy.currentLanguage = action.language;
            return stateCopy;
        case FILTER_LANGUAGES_ARRAY:
            stateCopy.filteredLanguagesArray = state.allLanguages.filter(function (language) {
                return language !== state.currentLanguage
            });
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const ToggleLanguageActionCreator = (language) => {
    return {
        type: TOGGLE_LANGUAGE,
        language: language
    }
}
export const FilterLanguagesActionCreator = (language) => {
    return {
        type: FILTER_LANGUAGES_ARRAY,
        language: language
    }
}
export default languageReducer;