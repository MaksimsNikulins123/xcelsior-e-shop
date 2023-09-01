import 'bootstrap/dist/css/bootstrap.css';

import { Formik, Form, Field } from 'formik';
import LoadingSpiner from '../LoadingSpiner/LoadingSpiner';
import { SignupFormValidator } from './SignupFormValidator';

const SignupFormikForm = (props: any) => (

    <Formik
        initialValues={{ name: '', email: '', emailConfirmation: '', password: '', passwordConfirmation: '', userLocation: '' }}
        // onSubmit={SignupFormValidator.submitForm}
        onSubmit={props.submitForm}
    >
        {({ errors, touched, values}) => (
            <Form className="w-25 p-3">
                <div className="mb-3 d-flex justify-content-center align-items-center">
                    <h1>Signup Form</h1>
                </div>
                <div className="mb-3">
                    <Field
                        name="name"
                        validate={SignupFormValidator.validateName}
                        type="text"
                        placeholder="name"
                        aria-describedby="nameHelp"
                        className={`form-control ${errors.name && touched.name ? "border-danger" : ""}`}
                    />
                    {errors.name && touched.name && <div className="link-danger">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <Field
                        name="email"
                        validate={SignupFormValidator.validateEmail}
                        type="email"
                        placeholder="e-mail"
                        aria-describedby="emailHelp"
                        className={`form-control ${errors.email && touched.email ? "border-danger" : ""}`}
                    />
                    {errors.email && touched.email && <div className="link-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <Field
                        name="emailConfirmation"
                        validate={(value: any) => SignupFormValidator.validateRepeatEmail(values.email, value)}
                        type="email"
                        placeholder="repeat e-mail"
                        aria-describedby="emailHelp"
                        className={`form-control ${errors.emailConfirmation && touched.emailConfirmation ? "border-danger" : ""}`}
                    />
                    {errors.emailConfirmation && touched.emailConfirmation && <div className="link-danger">{errors.emailConfirmation}</div>}
                </div>
                <div className="mb-3">
                    <Field
                        name="password"
                        validate={SignupFormValidator.validatePassword}
                        type="password"
                        autoComplete="on"
                        placeholder="password"
                        className={`form-control ${errors.password && touched.password ? "border-danger" : ""}`}
                    />
                    {errors.password && touched.password && <div className="link-danger">{errors.password}</div>}
                </div>
                <div className="mb-3">
                    <Field
                        name="passwordConfirmation"
                        validate={(value: any) => SignupFormValidator.validateRepeatPassword(values.password, value)}
                        type="password"
                        autoComplete="on"
                        placeholder="confirm password"
                        className={`form-control ${errors.passwordConfirmation && touched.passwordConfirmation ? "border-danger" : ""}`}
                    />
                    {errors.passwordConfirmation && touched.passwordConfirmation && <div className="link-danger">{errors.passwordConfirmation}</div>}
                </div>
                <div className="mb-3 text-primary text-opacity-50" >
                    <Field as="select"
                        name="userLocation"
                        validate={SignupFormValidator.validateCheckbox}
                        className="form-select"
                    >
                        <option className="text-body-tertiary" defaultValue="">Your working place</option>
                        <option value="UB9">UB9</option>
                        <option value="BB">BB</option>
                        <option value="D3A">D3A</option>
                        <option value="PFD">PFD</option>
                    </Field>
                    {errors.userLocation && touched.userLocation && <div className="link-danger">{errors.userLocation}</div>}
                </div>
                <div className="mb-3">
                    {
                        props.loading
                        ?
                        <LoadingSpiner/>
                        :
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary" >SignUp</button>
                        </div>
                    }
                    
                </div>

            </Form>
        )}

    </Formik>

);


export default SignupFormikForm;