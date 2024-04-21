import axios from 'axios';
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../PostContex/PostContext";
import {
  faCommentAlt,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import "./postDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getComments } from "../../services/services";
import { COMMENTS_URL } from '../../services/endpoint';

function PostDetails() {
  const { postId } = useParams(); // Obtener el ID del post de los parámetros de la URL
  const { posts, comments } = usePostContext();
  const [commentText, setCommentText] = useState("");

  // Función para manejar el cambio en el input
  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async () => {
    if (commentText.trim() !== "") {
      const newComment = {
        postId: parseInt(postId),
        userId: 1,
        content: commentText,
      };

      try {
        await axios.post(COMMENTS_URL, newComment);
        setCommentText("");
        console.log("Comentario enviado con éxito");
      } catch (error) {
        console.error("Error al enviar el comentario:", error);
      }
    } else {
      alert("Por favor, escribe algo antes de enviar el comentario.");
    }
  };

  // Buscar el post seleccionado por su ID
  const selectedPost = posts.find((post) => post.id === parseInt(postId));

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  // Filtrar los comentarios que pertenecen al post seleccionado
  const postComments = comments.filter(
    (comment) => comment.postId === selectedPost.id
  );
  const commentCount = postComments.length;

  return (
    <div className="contenedorDetallePost">
      <div key={selectedPost.id}>
        <div className="imageContainer">
          <img
            className="imageDescription"
            src={selectedPost.imageUrl}
            alt={`Image for post ${selectedPost.id}`}
          />
          <div className="postInfoOverlayDescri">
            <div>
              <img
                className="perfilUser"
                src={selectedPost.imageUrl}
                alt={`Profile for user ${selectedPost.name}`}
              />
            </div>
            <div className="postInfoOverlayIcons">
              <div className="postInfo">
                <FontAwesomeIcon icon={faHeart} />
                <span>{selectedPost.likes}</span>
              </div>
              <div className="postInfo">
                <FontAwesomeIcon icon={faCommentAlt} />
                <span>{commentCount}</span>
              </div>
              <div className="postInfo">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>{commentCount}</span>
              </div>
            </div>
          </div>
        </div>
        <h3>{selectedPost.content}</h3>
        <div className="containerComment">
          <img
            className="perfilUser"
            src={selectedPost.imageUrl}
            alt={`Profile for user ${selectedPost.name}`}
          />
          <div className="commentSection">
            <div className="inputContainer">
              <input
                className="inputCommet"
                type="text"
                placeholder="Añade un comentario..."
                value={commentText}
                onChange={handleInputChange} // Manejar cambios en el input
                onKeyDown={(event) => {
                  // Manejar el evento de presionar una tecla
                  if (event.key === "Enter") {
                    handleCommentSubmit(); // Enviar el comentario si se presiona Enter
                  }
                }}
              />
              <div className="iconContainer" onClick={handleCommentSubmit}> {/* Añade el manejador de eventos onClick aquí */}
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
