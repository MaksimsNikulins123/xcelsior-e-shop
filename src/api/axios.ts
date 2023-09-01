
import axios from "axios";
import { ToggleLoadingActionCreator } from "../redux/loading-reducer";
import { SetLoginUserAccessTokenActionCreator, ToggleLoginSeccessActionCreator, ToggleLoginUserRightsActionCreator } from "../redux/loginform-reducer";
import { ToggleSignupSeccessActionCreator } from "../redux/signupform-reducer";

export const UserAPI = {
     
    GetMessage: () => {
        axios.get('http://127.0.0.1:8000/api/test')
            .then(function (response) {
                // handle success
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
           
            });
    },

    SignUp: (data: any, dispatch: any) => {
        // const navigate =  useNavigate();
        dispatch(ToggleLoadingActionCreator(true))
        
        axios.post('http://127.0.0.1:8000/api/signup', data)
            .then(function () {
                // console.log(response)
                dispatch(ToggleSignupSeccessActionCreator(true))
                dispatch(ToggleLoadingActionCreator(false))
            })
            .catch(function (error) {
                dispatch(ToggleLoadingActionCreator(false))
                alert(error.response.data.message)

            })
            .finally(function () {
                
                // always executed
            });
    },

    Login: (data: any, dispatch: any) => {

        dispatch(ToggleLoadingActionCreator(true))
        axios.post('http://127.0.0.1:8000/api/login', data )
        .then(function (response) {
            // dispatch(ToggleUserStatusActionCreator(response.data.rights))

            dispatch(ToggleLoginSeccessActionCreator(true))
            dispatch(ToggleLoginUserRightsActionCreator(response.data.rights))
            dispatch(SetLoginUserAccessTokenActionCreator(response.data.token))
            dispatch(ToggleLoadingActionCreator(false))
        })
        .catch(function (error) {
            dispatch(ToggleLoadingActionCreator(false))
            alert(error.response.data.message)
        })
        .finally(function () {
            // always executed
        });
    }

    

    //     GetAuthStatus: () => {

    //        const instance = axios.create({
    //            baseURL: 'http://127.0.0.1:8000/api/V1/patients',

    //            headers: {
    //                'Access-Control-Allow-Origin': '*',
    //                'X-Custom-Header': 'auth',
    //                'Content-Type': 'application/json'
    //            },
    //            withCredentials: true
    //          });
    //        return instance.get('/authStatus' );

    //    },
    //    Login: (email, password) => {
    //        const instance = axios.create({
    //            baseURL: 'http://127.0.0.1:8000/api/V1/patients',

    //            headers: {
    //                'Access-Control-Allow-Origin': '*',
    //                'X-Custom-Header': 'auth',
    //                'Content-Type': 'application/json'
    //            },
    //            withCredentials: true,
    //            data: {
    //                login_email: email,
    //                login_password: password,
    //            }
    //          });
    //        return instance.post('/login');
    //    }



}