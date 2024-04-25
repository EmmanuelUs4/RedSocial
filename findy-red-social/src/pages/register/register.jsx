import React, { useState } from 'react';
import {StyledBackground,Names, Campos, Contenedor, Pregunta, Regisbuton,} from './StyledRegister';
import ImagenLo from '../../assets/imglogo/ImagenLogo.png';
import LetraLog from '../../assets/imglogo/LOGOLOGO.png';
import botonRegis from '../../assets/imglogo/Register.png';
import { useNavigate } from 'react-router-dom';
import endpoints from '../../services/enpoints';

const endpoint = endpoints.users

const RegistroForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    name: '',
    telephone: '',
    password: ''
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.id;
    setForm({
      ...form,
      [key]: value
    })

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      console.log(response)

      if (response.ok) {
        console.log('Registration data saved successfully');
        alert("Has creado tu cuenta exitosamente");
        navigate('/login');
        // Optionally clear the form or redirect to another page
      } else {
        console.error('Failed to save registration data:', response.statusText);
        alert("Ha ocurrido un error, intente de nuevo");
      }
    } catch (error) {
      console.error('Error saving registration data:', error);
    }
  };

  return (
    <StyledBackground>
      <div>
        <img src={ImagenLo} alt="Logo" />
      </div>
      <div>
        <img src={LetraLog} alt="Letra" />
      </div>

      <Contenedor>
        <form onSubmit={handleSubmit}>
          <div>
            <Names htmlFor="username">Nombre de usuario:</Names>
            <Campos
              type="text"
              id="username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <Names htmlFor="name">Nombre completo:</Names>
            <Campos
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Names htmlFor="password">Contraseña:</Names>
            <Campos
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <Names htmlFor="telephone">Número celular:</Names>
            <Campos
              type="text"
              id="telephone"
              value={form.telephone}
              onChange={handleChange}
            />
          </div>
          <Pregunta>¿Tienes una cuenta?</Pregunta>
          <Regisbuton type="submit">
            <img src={botonRegis} alt="Botón" />
          </Regisbuton>
        </form>
      </Contenedor>
    </StyledBackground>
  );
};


export default RegistroForm;