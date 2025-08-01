import { useCallback, useContext } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

import { ROUTES } from "../../constants/routes";
import { AuthContext } from "../../context/AuthContext";

const loginSchema = object().shape({
  email: string().email("Invalid email").required("Required"),
  password: string().required("Required"),
});

const Login = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    setLoggedIn(true);
    navigate(ROUTES.home);
  }, [setLoggedIn, navigate]);

  return (
    <div className="container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(_values, { setSubmitting }) => {
          handleLogin(); // pass the values to the onLogin prop if handled
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1>Login</h1>

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" autocomplete="off" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
