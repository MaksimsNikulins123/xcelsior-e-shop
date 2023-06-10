import 'bootstrap/dist/css/bootstrap.css';

import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { LoginFormValidator } from './LoginFormValidator';
import LoadingSpiner from './../LoadingSpiner/LoadingSpiner';

const LoginFormikForm = (props) => (

   

    <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        onSubmit={props.submitForm}
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
                        id="exampleCheck1"
                        autoComplete="off"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                </div>
                <div className="mb-3">
                {
                        props.loading
                        ?
                        <LoadingSpiner/>
                        :
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary" >Login</button>
                        </div>
                    }
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