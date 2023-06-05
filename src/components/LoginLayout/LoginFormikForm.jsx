import 'bootstrap/dist/css/bootstrap.css';

import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { LoginFormValidator } from './LoginFormValidator';

const LoginFormikForm = (props) => (

   

    <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        onSubmit={LoginFormValidator.submitForm}
    >

        {({ errors, touched }) => (
 

            <Form className="w-25 p-3">
                <div className="mb-3 d-flex justify-content-center align-items-center">
                    <h1>Login Form</h1>
                </div>
                <div className="mb-3">
                    <Field
                        name="email"
                        validate={LoginFormValidator.validateEmail}
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
                        validate={LoginFormValidator.validatePassword}
                        type="password"
                        autoComplete="on"
                        placeholder="password"
                        className={`form-control ${errors.password && touched.password ? "border-danger" : ""}`}
                    />
                    {errors.password && touched.password && <div className="link-danger">{errors.password}</div>}
                </div>
                <div className="mb-3">
                    <Field
                        name="rememberMe"
                        type="checkbox"
                        className="form-check-input"
                        // className={`form-check-input ${errors.checkbox && touched.checkbox ? "border-danger" : ""}`}
                        id="exampleCheck1"
                        autoComplete="off"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    {/* {errors.checkbox && touched.checkbox && <div className="link-danger">{errors.checkbox}</div>} */}
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="mb-3">
                    <Link to="/signup"
                    onClick={props.signUpSeccess}
                    >Create account</Link>
                </div>
            </Form>
        )}

    </Formik>

);


export default LoginFormikForm;