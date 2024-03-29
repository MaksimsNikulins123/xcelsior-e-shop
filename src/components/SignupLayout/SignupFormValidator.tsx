import { UserAPI } from '../../api/axios';

export const SignupFormValidator = {


    validateName(value: any) {

        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    },

    validateEmail(value: any) {

        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    },

    validateRepeatEmail(email:any, value: any) {

        let error;
        if (!value) {
            error = 'Required';
        } else if (email !== value) {
            error = 'Please repeat e-mail';
        }
        return error;
    },

    validatePassword(value: any) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (value.length < 5) {
            error = 'Min length 5 symbols';
        } else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
            error = 'The password must contain at least one symbol';
        }
        return error;
    },

    validateRepeatPassword(password: any, value: any) {

        let error;
        if (!value) {
            error = 'Required';
        } else if (password !== value) {
            error = 'Please repeat password';
        }

        return error;
    },

    validateCheckbox(value: any) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    },

    submitForm(values: any, dispatch: any) {
        const formData = {
            'name': values.name,
            'email': values.email,
            'email_confirmation': values.emailConfirmation,
            'password': values.password,
            'password_confirmation': values.passwordConfirmation,
            'user_location': values.userLocation
        }
        UserAPI.SignUp(formData, dispatch)        
    }
}

