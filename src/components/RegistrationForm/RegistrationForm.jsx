import * as Yup from 'yup';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authOperations from '../../redux/auth/auth-operations';
import { Link } from 'react-router-dom';
import s from './RegisterForm.module.scss';

export default function RegistrationForm() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(1, 'Too short')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(4, 'Must be at least 4 symbols!')
      .max(20, 'Too Long!')
      .required('Required'),
  });
  const dispatch = useDispatch();

  const onSubmit = ({ name, email, password }) => {
    dispatch(authOperations.register({ name, email, password }));
    // alert(JSON.stringify({ name, email, password }, null, 2));
  };

  const renderError = message => <p className={s.error}>{message}</p>;
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async ({ name, email, password }, { resetForm }) => {
          await onSubmit({ name, email, password });
          resetForm();
        }}
      >
        <Form>
          <div className={s.imageContainer}>
            <div
              className={s.formContainer}
              // style={{
              //   marginTop: '115px',
              // }}
            >
              <h2 className={s.caption}>Register</h2>
              <div className="field">
                <label className="label" htmlFor="name"></label>
                <div className="control">
                  <Field
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Name *"
                  />
                  <ErrorMessage name="name" render={renderError} />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="email"></label>
                <div className="control">
                  <Field
                    name="email"
                    type="text"
                    className="input"
                    placeholder=" Email *"
                  />
                  <ErrorMessage name="email" render={renderError} />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="password"></label>
                <div className="control">
                  <Field
                    name="password"
                    type="text"
                    className="input"
                    placeholder="Password *"
                  />
                  <ErrorMessage name="password" render={renderError} />
                </div>
              </div>
              <div className={s.wrapper}>
                <button type="submit" className={s.button}>
                  Register
                </button>
                <button className={s.button}>
                  <Link to="/login" className={s.link}>
                    Login
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
