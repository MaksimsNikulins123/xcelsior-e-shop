import { useStateContext } from "../contexts/ContextProvider";

export const UserAPI = {

    

    BASE_URL: 'http://127.0.0.1:8000',

    SignUp: () => {

        const {setUser, setToken} = useStateContext();


        const instance = axios.create({
            baseURL: `${BASE_URL}/api/signup`,

            // headers: {
            //     'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            // }
        });

        instance.interceptors.request.use((config) => {
            const token = localStorage.getItem('ACCESS_TOKEN');
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        })

        instance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                const {
                    response
                } = error;
                if (response.status === 401) {
                    localStorage.removeItem('ACCESS_TOKEN')
                }
                // else if (response.status === 403){
                //     'Page is forbidden'
                // }else if (response.status === 404){
                //     'Page not found'
                // }
       

                throw error;
            }
        )
        // return instance.get('/authStatus' );
        return instance;
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