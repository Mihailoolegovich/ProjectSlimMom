import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Link } from 'react-router-dom';

const s = {
  // label: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   marginBottom: 10,
  // },
  input: {
    display: 'block',
    // alignItems: 'center',
    height: 30,
    width: 200,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 10,
    // marginRight: 'auto',
    // marginLeft: 'auto',
    border: 'none',
  },
  title: {
    marginBottom: 20,
    marginTop: 150,
  },
  // button: {
  //   fontWeight: 'bold',
  //   borderRadius: 5,
  //   marginTop: 5,
  //   marginBottom: 10,
  //   height: 35,
  //   width: 130,
  //   backgroundColor: 'rgb(216, 174, 245)',
  //   border: 'none',
  //   cursor: 'pointer',
  // },
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 symbols!')
      .max(20, 'Too Long!')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: ({ email, password }) => {
      dispatch(authOperations.logIn({ email, password }));
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h2 style={s.title}>SIGN IN</h2>
      <form onSubmit={formik.handleSubmit}>
        <label style={s.label} htmlFor="email"></label>
        <input
          style={s.input}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email*"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label style={s.label} htmlFor="password"></label>
        <input
          style={s.input}
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password*"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <button type="submit" style={s.button}>
          Login
        </button>
        <button>
          <Link to="/auth/signup">Register</Link>
        </button>
      </form>
    </div>
  );
}
