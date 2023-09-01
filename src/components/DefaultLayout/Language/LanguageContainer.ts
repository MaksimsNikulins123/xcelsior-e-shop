import { connect } from 'react-redux';
import { compose } from 'redux';
import { FilterLanguagesActionCreator, ToggleLanguageActionCreator } from '../../../redux/language-reducer';
import Language from './Language';

const mapStateToProps = (state: any) => {
    // debugger
    return {
        filteredLanguagesArray: state.language.filteredLanguagesArray,
    }
    
}
const mapDispatchToProps = (dispatch: any) => {
    return { 
        toggleLanguage: (language: any) => {dispatch(ToggleLanguageActionCreator(language))},
        filterLanguages: (language: any) => {dispatch(FilterLanguagesActionCreator(language))},
    }
}

const LanguageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Language)


export default LanguageContainer;