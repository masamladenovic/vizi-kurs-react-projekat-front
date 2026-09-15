import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import * as Yup from "yup";
import "./css/Login.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Navbar from "../components/navigation/Navbar";
import Breadcrumbs from "../components/navigation/Breadcrumbs";

const Register = () => {
  const initialRegisterValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
  };

  const handleRegisterSubmit = (values) => {
    console.log("Registration data: ", values);
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must have at least 2 characters.")
      .required("Name is required."),

    surname: Yup.string()
      .min(2, "Surname must have at least 2 characters.")
      .required("Surname is required."),

    email: Yup.string()
      .email("Email is not valid.")
      .required("Email is required."),

    phone: Yup.string(),

    dateOfBirth: Yup.string(),

    gender: Yup.string(),

    password: Yup.string()
      .min(6, "Password must have at least 6 characters.")
      .required("Password is required."),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match.")
      .required("Confirm Password is required."),
  });

  return (
    <>
      <Navbar hasHero />
      <Breadcrumbs/>

      <section className="login-section register-page-section">
        <div className="register-form-div register-form-wide">
          <Formik
            initialValues={initialRegisterValues}
            validationSchema={RegisterSchema}
            onSubmit={handleRegisterSubmit}
          >
            <Form className="register-form">
              <div className="register-heading">
                <span className="register-eyebrow">WELCOME TO MAISON ÉLOI</span>

                <h2 className="register-title">Create Account</h2>

                <p className="register-subtitle">
                  Create your account to make your stay with us even more
                  personal.
                </p>
              </div>

              <div className="register-form-grid register-form-grid-wide">
                {/* NAME */}
                <div className="register-input-wrapper">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="register-form-control"
                  />

                  <ErrorMessage
                    name="name"
                    className="register-error"
                    component="div"
                  />
                </div>

                {/* SURNAME */}
                <div className="register-input-wrapper">
                  <Field
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Surname"
                    className="register-form-control"
                  />

                  <ErrorMessage
                    name="surname"
                    className="register-error"
                    component="div"
                  />
                </div>

                {/* EMAIL */}
                <div className="register-input-wrapper">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="register-form-control"
                  />

                  <ErrorMessage
                    name="email"
                    className="register-error"
                    component="div"
                  />
                </div>

                {/* PHONE - OPTIONAL */}
                <div className="register-input-wrapper register-optional-field">
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    className="register-form-control"
                  />

                  <span className="register-optional-label">Optional</span>

                  <ErrorMessage
                    name="phone"
                    className="register-error"
                    component="div"
                  />
                </div>

                {/* DATE OF BIRTH - OPTIONAL */}
                <div className="register-input-wrapper register-optional-field">
                  <Field
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    className="register-form-control register-date-input"
                  />

                  <span className="register-field-label">Date of birth</span>

                  <span className="register-optional-label">Optional</span>

                  <ErrorMessage
                    name="dateOfBirth"
                    className="register-error"
                    component="div"
                  />
                </div>

                {/* GENDER - OPTIONAL */}
                <div className="register-input-wrapper register-optional-field">
                  <Field
                    as="select"
                    id="gender"
                    name="gender"
                    className="register-form-control register-select"
                  >
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </Field>

                  <span className="register-optional-label">Optional</span>

                  <ErrorMessage
                    name="gender"
                    className="register-error"
                    component="div"
                  />
                </div>

                {/* PASSWORD */}
                <div className="register-input-wrapper">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="register-form-control"
                  />

                  <ErrorMessage
                    name="password"
                    className="register-error"
                    component="div"
                  />
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="register-input-wrapper">
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    className="register-form-control"
                  />

                  <ErrorMessage
                    name="confirmPassword"
                    className="register-error"
                    component="div"
                  />
                </div>
              </div>

              <button type="submit" className="register-button">
                CREATE ACCOUNT
              </button>
            </Form>
          </Formik>

          <div className="quick-login-links register-login-link">
            <Link to="/login">Already have an account?</Link>
          </div>

          <div className="or-login-with register-social-section">
            <p>OR REGISTER WITH</p>

            <div className="login-icons">
              <FaGoogle />
              <FaFacebook />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
