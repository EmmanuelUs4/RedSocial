import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './editProfile.scss';

const EditProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    description: '',
    avatar: '' // Agregar avatar al estado de usuario
  });
  const [newAvatarUrl, setNewAvatarUrl] = useState(''); // Estado para la nueva URL del avatar

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = sessionStorage.getItem('userId');
      try {
        if (!userId) {
          console.error('No se encontró el ID del usuario en sessionStorage');
          return;
        }
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        const userDataFromApi = response.data;
        setUserData(userDataFromApi);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleNameChange = (event) => {
    setUserData({ ...userData, name: event.target.value });
  };

  const handleUsernameChange = (event) => {
    setUserData({ ...userData, username: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setUserData({ ...userData, description: event.target.value });
  };

  const handleAvatarChange = () => {
    const newAvatarUrl = prompt('Enter new avatar URL:');
    if (newAvatarUrl) {
      setUserData({ ...userData, avatar: newAvatarUrl }); // Actualizar el estado de usuario con la nueva URL del avatar
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      updateUserInfo();
    }
  };

  const updateUserInfo = async () => {
    try {
      // Actualizar la información del usuario, incluyendo el avatar si se proporcionó una nueva URL
      const updatedUserData = newAvatarUrl ? { ...userData, avatar: newAvatarUrl } : userData;
      await axios.put(`http://localhost:3000/users/${userData.id}`, updatedUserData);
      alert('User information updated successfully');
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return (
    <section className='main__container'>
      <section className='image__section'>
        <figure className='image__figure'>
          <img src={userData.avatar} alt="" className='image__user'/>
        </figure>
        <figure className='mini__avatar__change'>
          <img src={userData.avatar} alt="" className='mini__image__user'/>
          <button onClick={handleAvatarChange}>+</button> {/* Agregar onClick para manejar el cambio de avatar */}
        </figure>
      </section>

      <section className='info__section'>
        <article className='name__article info__article'>
          <label htmlFor="Name" className='name__label'>Name</label>
          <input
            type="text"
            value={userData.name}
            onChange={handleNameChange}
            onKeyPress={handleKeyPress}
            className='name__input'
          />
        </article>
        <article className='username__article info__article'>
          <label htmlFor="Username" className='username__label'>Username</label>
          <input
            type="text"
            value={userData.username}
            onChange={handleUsernameChange}
            onKeyPress={handleKeyPress}
            className='username__input'
          />
        </article>
        <article className='description__article info__article'>
          <label htmlFor="Description" className='description__label'>Description</label>
          <input
            type="text"
            value={userData.description}
            onChange={handleDescriptionChange}
            onKeyPress={handleKeyPress}
            className='description__input'
          />
        </article>
        <button onClick={updateUserInfo}>Save</button>
      </section>
    </section>
  );
};

export default EditProfile;
