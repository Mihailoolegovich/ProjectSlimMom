import * as Yup from 'yup';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authOperations from '../redux/auth/auth-operations';
import { Link } from 'react-router-dom';

export default function RegistrationPage() {
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
    alert(JSON.stringify({ name, email, password }, null, 2));
  };

  const renderError = message => <p>{message}</p>;
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
          <div
            className="container"
            style={{
              width: '60%',
              marginTop: '100px',
            }}
          >
            <div className="field">
              <label className="label" htmlFor="name">
                Name *
              </label>
              <div className="control">
                <Field
                  name="name"
                  type="text"
                  className="input"
                  placeholder=""
                />
                <ErrorMessage name="name" render={renderError} />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email *
              </label>
              <div className="control">
                <Field
                  name="email"
                  type="text"
                  className="input"
                  placeholder=""
                />
                <ErrorMessage name="email" render={renderError} />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="password">
                Password *
              </label>
              <div className="control">
                <Field
                  name="password"
                  type="text"
                  className="input"
                  placeholder=""
                />
                <ErrorMessage name="password" render={renderError} />
              </div>
            </div>
            <button type="submit">Register</button>
            <Link to="/login">Login</Link>
          </div>
        </Form>
      </Formik>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
