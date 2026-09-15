import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import * as Yup from "yup";
import "./css/Login.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Navbar from "../components/navigation/Navbar";
import Breadcrumbs from "../components/navigation/Breadcrumbs";

const Login = () => {
  const initialLoginValues = {
    email: "",
    password: "",
  };

  const handleLoginSubmit = (values) => {
    console.log("Podaci za prijavu: ", values);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid.")
      .required("Email is required."),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters.")
      .required("Password is required."),
  });

  return (
    <>
      <Navbar hasHero />
      <Breadcrumbs/>
      <section className="login-section">
        <div className="register-form-div">
          <Formik
            initialValues={initialLoginValues}
            validationSchema={LoginSchema}
            onSubmit={handleLoginSubmit}
          >
            <Form className="register-form">
              <h2 className="register-title">Welcome</h2>
              <div className="register-form-group">
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
              </div>

              <div className="register-form-group">
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
              </div>

              <button type="submit" className="register-button">
                LOGIN
              </button>
            </Form>
          </Formik>
          <div className="quick-login-links">
            <Link to="#">Forgot password?</Link>
            <Link to="/register">Sign Up</Link>
          </div>

          <div className="or-login-with">
            <p>OR LOGIN WITH</p>
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

export default Login;
