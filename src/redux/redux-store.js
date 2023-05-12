// import { combineReducers, createStore } from 'redux';
import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
// import formReducer from './form-reducer';
// import searchReducer from './search-reducer';
import thunkMiddleware from 'redux-thunk';
import languageReducer from './language-reducer';
// import authReducer from './auth-reducer';


let reducers = combineReducers({
    language: languageReducer,
    // authentication: authenticationReducer,
    // authorization: authorizationReducer
    // search: searchReducer,
    // form: formReducer,
});
// let rerender = () => {
//     console.log("state changed");
// }
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
// export default store;