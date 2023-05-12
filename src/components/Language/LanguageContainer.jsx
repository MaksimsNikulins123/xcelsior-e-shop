import { connect } from 'react-redux';
import { compose } from 'redux';
import Language from './Language';
import { FilterLanguagesActionCreator, ToggleLanguageActionCreator } from './../../redux/language-reducer';



const mapStateToProps = (state) => {
    // debugger
    return {
        filteredLanguagesArray: state.language.filteredLanguagesArray,
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return { 
        toggleLanguage: (language) => {dispatch(ToggleLanguageActionCreator(language))},
        filterLanguages: (language) => {dispatch(FilterLanguagesActionCreator(language))},
    }
}

const LanguageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Language)


export default LanguageContainer;