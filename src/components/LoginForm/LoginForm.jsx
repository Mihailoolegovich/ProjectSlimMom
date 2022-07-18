import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Link } from 'react-router-dom';
import s from './LoginForm.module.scss';

export default function LoginForm() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 symbols!')
      .max(20, 'Too Long!')
      .required('Password is required'),
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
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
      <h2 className={s.title}>SIGN IN</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            className={s.input}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email*"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={s.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            className={s.input}
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password*"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={s.error}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className={s.wrapper}>
          <button type="submit" className={s.button}>
            Login
          </button>
          <Link to="/auth/signup" className={s.button}>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
