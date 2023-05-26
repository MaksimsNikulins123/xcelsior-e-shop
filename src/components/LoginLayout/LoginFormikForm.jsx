import 'bootstrap/dist/css/bootstrap.css';

import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
// import { validateEmail } from '../../utils/validators/required';

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validatePassword(value) {
    // debugger
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length > 50) {
        error = 'Max length 50 symbols';
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


const submitForm = (values) => {
    // same shape as initial values
    console.log(values);
}

const LoginFormikForm = () => (



    <Formik
        initialValues={{ email: '', password: '', checkbox: false }}
        onSubmit={submitForm}
    >
        {({ errors, touched }) => (
            <Form className="w-25 p-3">
                <div className="mb-3 d-flex justify-content-center align-items-center">
                    <h1>Login Form</h1>
                </div>
                <div className="mb-3">
                    <Field
                        name="email"
                        validate={validateEmail}
                        type="email"
                        placeholder="e-mail"
                        id="exampleInputEmail1"
                        className={`form-control ${errors.email && touched.email ? "border-danger" : ""}`}
                    />
                    {errors.email && touched.email && <div className="link-danger">{errors.email}</div>}
                </div>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
                        name="checkbox"
                        validate={validateCheckbox}
                        type="checkbox"
                        // className="form-check-input"
                        className={`form-check-input ${errors.checkbox && touched.checkbox ? "border-danger" : ""}`}
                        id="exampleCheck1"
                        autoComplete="off"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    {errors.checkbox && touched.checkbox && <div className="link-danger">{errors.checkbox}</div>}
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="mb-3">
                    <Link to="/signup">Create account</Link>
                </div>
            </Form>
        )}

    </Formik>

);


export default LoginFormikForm;