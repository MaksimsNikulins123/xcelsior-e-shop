import 'bootstrap/dist/css/bootstrap.css';

import { Formik, Form, Field } from 'formik';
import { UserAPI } from '../../api/axios';
import { useStateContext } from '../../contexts/ContextProvider';

function validateEmail(value) {

    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}
function validateRepeatEmail(email, value) {

    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    } else if (email !== value) {
        error = 'Please repeat e-mail';
    }
    return error;
}

function validatePassword(value) {

    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 5) {
        error = 'Min length 5 symbols';
    }
    return error;
}
function validateRepeatPassword(password, value) {

    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 5) {
        error = 'Min length 5 symbols';
    } else if (password !== value) {
        error = 'Please repeat password';
    }

    return error;
}
function validateCheckbox(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

// const submitFormContainer = () => {
    // const {setUser, setToken} = useStateContext();
    
    const submitForm = (values) => {

        // 
    
        console.log(values);
    
        // UserAPI.SignUp.post('/signup', values)
        // .then(({data}) => {
        //     setUser(data.user);
        //     setToken(data.token);
        // })
        // .catch(error => {
        //     const response = error.response;
        //     if(response && response.status === 422) {
        //         console.log(response.data.errors)
        //     }
        // })
        // window.location.replace('/shop')
    }
// }





const SignupFormikForm = () => (

    <Formik
        initialValues={{ email: '', repeatEmail: '', password: '', repeatPassword: '', userLocation: '' }}
        onSubmit={submitForm}
    >
        {({ errors, touched, values }) => (
            <Form className="w-25 p-3">
                <div className="mb-3 d-flex justify-content-center align-items-center">
                    <h1>Signup Form</h1>
                </div>
                <div className="mb-3">
                    <Field
                        name="email"
                        validate={validateEmail}
                        type="email"
                        placeholder="e-mail"
                        aria-describedby="emailHelp"
                        className={`form-control ${errors.email && touched.email ? "border-danger" : ""}`}
                    />
                    {errors.email && touched.email && <div className="link-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <Field
                        name="repeatEmail"
                        validate={value => validateRepeatEmail(values.email, value)}
                        type="email"
                        placeholder="repeat e-mail"
                        aria-describedby="emailHelp"
                        className={`form-control ${errors.repeatEmail && touched.repeatEmail ? "border-danger" : ""}`}
                    />
                    {errors.repeatEmail && touched.repeatEmail && <div className="link-danger">{errors.repeatEmail}</div>}
                </div>
                <div className="mb-3">
                    <Field
                        name="password"
                        validate={validatePassword}
                        type="password"
                        autoComplete="on"
                        placeholder="password"
                        className={`form-control ${errors.password && touched.password ? "border-danger" : ""}`}
                    />
                    {errors.password && touched.password && <div className="link-danger">{errors.password}</div>}
                </div>
                <div className="mb-3">
                    <Field
                        name="repeatPassword"
                        validate={value => validateRepeatPassword(values.password, value)}
                        type="password"
                        autoComplete="on"
                        placeholder="confirm password"
                        className={`form-control ${errors.repeatPassword && touched.repeatPassword ? "border-danger" : ""}`}
                    />
                    {errors.repeatPassword && touched.repeatPassword && <div className="link-danger">{errors.repeatPassword}</div>}
                </div>
                <div className="mb-3 text-primary text-opacity-50" >
                    <Field as="select"
                        name="userLocation"
                        validate={validateCheckbox}
                        className="form-select"
                    >
                        <option className="text-body-tertiary" defaultValue="">Your working place</option>
                        <option value="UB9">UB9</option>
                        <option value="BB">BB</option>
                        <option value="PFD">PFD</option>
                    </Field>
                    {errors.userLocation && touched.userLocation && <div className="link-danger">{errors.userLocation}</div>}
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </div>

            </Form>
        )}

    </Formik>

);


export default SignupFormikForm;