import { UserAPI } from '../../api/axios';

export const LoginFormValidator = {

    validateEmail(value) {

        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    },
    
    validatePassword(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length < 5) {
            error = 'Min length 5 symbols';
        } else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)){
            error = 'The password must contain at least one symbol';
        }
        return error;
    },

    submitForm(values, dispatch) {
        // console.log(values)
        const formData = {
            'email': values.email,
            'password': values.password,
            'remember_me': values.rememberMe
        }
        UserAPI.Login(formData, dispatch)
    }
}

