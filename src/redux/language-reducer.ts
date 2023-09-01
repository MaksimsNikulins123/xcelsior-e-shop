const TOGGLE_LANGUAGE = 'TOGGLE-LANGUAGE';
const FILTER_LANGUAGES_ARRAY = 'FILTER-LANGUAGES-ARRAY';

let initialState = {
    defaultLanguage: 'en',
    allLanguages: ['lv', 'en', 'lt', 'ru'],
    currentLanguage: 'en',
    filteredLanguagesArray: ['lv', 'lt', 'ru'],
}

const languageReducer = (state = initialState, action: any) => {
    let stateCopy = {...state};

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

export const ToggleLanguageActionCreator = (language: any) => {
    return {
        type: TOGGLE_LANGUAGE,
        language: language
    }
}
export const FilterLanguagesActionCreator = (language:any) => {
    return {
        type: FILTER_LANGUAGES_ARRAY,
        language: language
    }
}
export default languageReducer;