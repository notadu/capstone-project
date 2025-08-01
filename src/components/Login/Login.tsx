import { useCallback, useContext } from "react";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

import { ROUTES } from "../../constants/routes";
import { AuthContext } from "../../context/AuthContext";

const validationSchema = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

const Login = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    setLoggedIn(true);
    navigate(ROUTES.home);
  }, [setLoggedIn, navigate]);

  const formik = useFormik({
    validationSchema,
    initialValues: { email: "", password: "" },

    onSubmit: () => {
      handleLogin(); // pass the values to the onLogin prop if handled
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1>Login</h1>

        <label htmlFor="email">Email</label>
        <input
          autoComplete="email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error-text">{formik.errors.email}</div>
        )}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error-text">{formik.errors.password}</div>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
