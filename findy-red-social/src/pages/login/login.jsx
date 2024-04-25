import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './login.scss'
import { AuthContext } from '../../AuthProvider'; 
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Por favor, introduce tu nombre de usuario'),
  password: Yup.string().required('Por favor, introduce tu contraseña'),
});

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (values, { setSubmitting }) => {
    const { username, password } = values;

    try {
      const response = await axios.get('http://localhost:3000/users');
      console.log(response.data)
      const {username, password} = response.data
      console.log(response)
      const user = response.data.find((user) => username == username && password == password);
      

      if (user) {
        login(user);
        console.log('Inicio de sesión exitoso');
        sessionStorage.setItem('userId', user.id);
        navigate('/profile'); 
      } else {
        setError('Nombre de usuario o contraseña incorrectos');
        console.log('Nombre de usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al procesar la respuesta de la API:', error);
      setError('Error al iniciar sesión');
    }

    setSubmitting(false);
  };

  return (
    <div className='all__container'>
    <header>

      <figure className='logos__container'>
        <img className='lone__logo' src="src\images\loneLogo.png" alt="" />
        <img className='text__logo' src="src\images\textLogo.png" alt="" />
      </figure>

    </header>
      {error && <div className="error">{error}</div>}
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <article className='info__article'>
              <label className='username__label' htmlFor="username">Username</label>
              <Field className='username__input' type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </article>
            <article className='info__article'>
              <label className='password__label' htmlFor="password">Password</label>
              <Field className='password__input' type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </article>
            <article className='buttons__container'>
              <button className='buttons__container--login__button' type="submit" disabled={isSubmitting}>Login</button>
              <p className='buttons__container--register__button'>Register</p>
            </article>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
