import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './newPost.scss';

const validationSchema = Yup.object().shape({
  imageUrl: Yup.string().required('Este campo es obligatorio'),
  description: Yup.string().required('Este campo es obligatorio'),
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
  return (
    <div className='form__Container'>
      <div className='form'>
        <Formik
          initialValues={{
            imageUrl: '',
            description: '',
            tags: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Logica
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <button className='button__return'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='return__button'><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"/></svg>
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
                name="description"
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
                <button className='share__button' type="submit">Compartir</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewPost;
