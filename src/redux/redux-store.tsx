import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import languageReducer from './language-reducer';
import { reducer as formReducer } from 'redux-form'
import loadingReducer from './loading-reducer';
import signUpFormReducer from './signupform-reducer';
import loginFormReducer from './loginform-reducer';

let reducers = combineReducers({
    language: languageReducer,
    form: formReducer,
    loading: loadingReducer,
    signUpForm: signUpFormReducer,
    loginForm: loginFormReducer,
});
// let rerender = () => {
//     console.log("state changed");
// }
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

declare const window: any;

window.store = store;

export default store;
// export default store;