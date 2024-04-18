import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './newPost.scss';



const validationSchema = Yup.object().shape({
    imageUrl: Yup.string().required('Este campo es obligatorio'),
    description: Yup.string().required('Este campo es obligatorio'),
    tags: Yup.string(),
  });

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
//logica
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <button className='button__return'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" className='return__button' ><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"/></svg>
         </button>
          </div>
          <h2 className='text__public'>Nueva publicación</h2>
          <p className='text__date'>Agregar contenido</p>
            <Field type="text" name="imageUrl" placeholder="URL de imagen o video" className={errors.imageUrl && touched.imageUrl ? 'input-error' : ''} />
            {errors.imageUrl && touched.imageUrl && <div>{errors.imageUrl}</div>}

            <p className='text__date'>Agregar descripción</p>
            <Field type="text" name="description" placeholder="Descripción" className={errors.description && touched.description ? 'input-error' : ''} />
            {errors.description && touched.description && <div>{errors.description}</div>}

            <p className='text__date'>Etiquetar personas</p>
            <Field type="text" name="tags" placeholder="Etiquetas" className={errors.tags && touched.tags ? 'input-error' : ''} />
            {errors.tags && touched.tags && <div>{errors.tags}</div>}
            <div >
                <button className='share__button' type="submit">Compartir</button>
          </div>
        </Form>
      )}
    </Formik>
    </div>
    </div>
  );
};

export default NewPost
