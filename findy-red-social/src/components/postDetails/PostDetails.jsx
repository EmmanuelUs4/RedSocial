import React from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../PostContex/PostContext";
import {
  faCommentAlt,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import "./postDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostDetails() {
  const { postId } = useParams(); // Obtener el ID del post de los parámetros de la URL
  const { posts, comments } = usePostContext();

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
              {/* Aquí puedes agregar otras funcionalidades, si es necesario */}
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
            <input type="text" placeholder="Añade un comentario..." />
            {/* Aquí podrías agregar más elementos relacionados con los comentarios */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
