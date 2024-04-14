import React from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../PostContext/PostContext";

function PostDetails() {
  const { postId } = useParams(); // Obtener el ID del post de los parámetros de la URL
  console.log("post id:", postId);
  const { posts } = usePostContext();

  // Buscar el post seleccionado por su ID
  const selectedPost = posts.find((post) => post.id == parseInt(postId));

  if (!selectedPost) {
    return <div>Loading...</div>; // Manejo de carga o error si el post no se encuentra
  }

  

  return (
    <div>
      <h2>Detalles del post seleccionado:</h2>
      <div key={selectedPost.id}>
        <h3>{selectedPost.content}</h3>
        <p>Publicado por: {selectedPost.userName}</p> {/* Asumiendo que tienes el nombre del usuario */}
        <img src={selectedPost.imageUrl} alt={`Image for post ${selectedPost.id}`} />
      </div>
    </div>
  );
}

export default PostDetails;