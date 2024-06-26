import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createPost } from '../../services/services';
import './newPost.scss';
import Swal from 'sweetalert2';
import { useAppContext } from '../../hooks/useAppContext';

const validationSchema = Yup.object().shape({
  imageUrl: Yup.string().required('Este campo es obligatorio'),
  content: Yup.string().required('Este campo es obligatorio'),
  tags: Yup.string(),
});

function InputField({ name, placeholder, type, errors, touched }) {
  return (
    <div>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={errors[name] && touched[name] ? 'input-error' : ''}
      />
      {errors[name] && touched[name] && <div>{errors[name]}</div>}
    </div>
  );
}

function NewPost() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const { dispatch } = useAppContext();

  const handleReturnClick = () => {
    if (confirming) {
      Swal.fire({
        title: "Publicación en progreso",
        text: "Perderás tus cambios",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF74B7",
        cancelButtonColor: "#FF7674",
        confirmButtonText: "Salir"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";
        }
      });
    } else {
      Swal.fire({
        title: "Operación cancelada",
        text: "Asegúrate de haber compartido la publicación antes de salir",
        icon: "info"
      });
    }
  };

  return (
    <div className='form__Container'>
      <div className='form'>
        <Formik
          initialValues={{
            imageUrl: '',
            content: '',
            tags: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setIsSubmitting(true);
            const mediaType = values.imageUrl.match(/\.(jpeg|jpg|png|gif|mp4|mov|avi)$/i) || values.imageUrl.includes('youtube.com') ? 'video' : 'image';
            const postId = Math.floor(Math.random() * 100) + 1;
            const postData = {
              ...values,
              id: postId,
              userId: 1, 
              likes: []
              // mediaType: mediaType, //informa si es imagen o video 
            };

            createPost(postData)
              .then(response => {
                console.log('Post creado exitosamente:', response);

                if (mediaType === 'video') {
                  Swal.fire({
                    title: "Video compartido con éxito",
                    icon: "success",
                  });
                } else {
                  Swal.fire({
                    title: "Imagen compartida con éxito",
                    icon: "success",
                  });
                }

                resetForm();
                setIsSubmitting(false);
                dispatch({ type: 'ADD_POST', payload: response.data });
              })
              .catch(error => {
                console.error('Error al crear el post:', error);
                setIsSubmitting(false);
              });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <button className='button__return' type="button" onClick={handleReturnClick}>
                  Salir
                </button>
              </div>
              <h2 className='text__public'>Nueva publicación</h2>
              <p className='text__date'>Agregar contenido</p>
              <InputField
                type="text"
                name="imageUrl"
                placeholder="URL de imagen o video"
                errors={errors}
                touched={touched}
              />

              <p className='text__date'>Agregar descripción</p>
              <InputField
                type="text"
                name="content"
                placeholder="Descripción"
                errors={errors}
                touched={touched}
              />

              <p className='text__date'>Etiquetar personas</p>
              <InputField
                type="text"
                name="tags"
                placeholder="Etiquetas"
                errors={errors}
                touched={touched}
              />
              <div>
                <button className='share__button' type="submit" disabled={isSubmitting} onClick={() => setConfirming(true)}>
                  Compartir
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewPost;
