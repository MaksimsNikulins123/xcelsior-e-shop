
import axios from "axios";
import { ToggleLoadingActionCreator } from "../redux/loading-reducer";
import { ToggleSignupSeccessActionCreator } from "../redux/signupform-reducer";
// import { useNavigate } from 'react-router-dom';



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

    SignUp: (data, dispatch) => {
        // const navigate =  useNavigate();
        dispatch(ToggleLoadingActionCreator())
        
        axios.post('http://127.0.0.1:8000/api/signup', data)
            .then(function () {
                // navigate('/')
                // console.log(response);
                // window.location = '/'
               
                dispatch(ToggleSignupSeccessActionCreator(true))
                dispatch(ToggleLoadingActionCreator())
            })
            .catch(function (error) {
                dispatch(ToggleLoadingActionCreator())

                alert(error.response.data.message)
                // handle error
                // console.log(error);
            })
            .finally(function () {
                
                // always executed
            });
    },

    Login: (data) => {
        axios.post('http://127.0.0.1:8000/api/login', data )
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
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