import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { usePostContext } from "../PostContext/PostContext";
import "./allPosts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function AllPosts() {
  const { posts, dispatch, selectedPost } = usePostContext();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleData = useCallback(async () => {
    try {
      const { data: userData } = await axios.get("http://localhost:3000/users");
      const { data: postsData } = await axios.get(
        "http://localhost:3000/posts"
      );

      setUsers(userData);
      // console.log("Users data:", userData);
      dispatch({ type: "setPosts", data: postsData });
      // console.log("response posts", postsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  const handleSelectPost = (postId) => {
    dispatch({ type: "selectpost", payload: postId }); // Actualizar el post seleccionado en el estado del contexto
    navigate(`/details/${postId}`);
  };

  const getUserName = (userId) => {
    // console.log("User ID:", userId);
    const user = users.find((user) => user.id == parseInt(userId));
    // console.log("User:", user);
    return user ? user.name : "Unknown User";
  };

  const getUserProfileUrl = (userId) => {
    const user = users.find((user) => user.id == parseInt(userId));
    return user ? user.profileUrl : "";
  };

  const handlePostClick = (postId) => {
    navigate(`/details/${postId}`);
  };

  return (
    <div className="mainContainer">
      <ul className="allPostsContainer">
        {posts.map((item) => (
          <li
            className={`postCard ${
              selectedPost && item.id === selectedPost.id ? "selectedPost" : ""
            }`}
            key={`p-${item.id}`}
            onClick={() => handleSelectPost(item.id)}
          >
            <div className="profile">
              <img
                className="imagePostProfile"
                src={getUserProfileUrl(item.userId)}
                alt={`Profile for user ${item.userId}`}
              />
              <span className="nameProfile">{getUserName(item.userId)}</span>
            </div>
            <div>
              <img
                className="imagePost"
                src={item.imageUrl}
                alt={`Image for post ${item.id}`}
              />
              <div className="postInfoOverlay">
                <div className="postInfo">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{item.likes}</span>
                </div>
                <div className="postInfo">
                  <FontAwesomeIcon icon={faCommentAlt} />
                  <span>{item.comments}</span>
                </div>
                <div className="postInfo">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>{item.comments}</span>
                </div>
              </div>
            </div>
            <div className="textPosts">
              <span className="nameDescription">
                {getUserName(item.userId)}
              </span>
              <span className="textContent">{item.content}</span>
            </div>

            {/* <div>
             <button onClick={() => handleSelectPost(item.id)}>
               Seleccionar
             </button>
           </div> */}
          </li>
        ))}
      </ul>
      {/* {selectedPostId && (
       <div>
         <h2>Detalles del post seleccionado:</h2>
         {posts.map((post) => {
           if (post.id === selectedPostId) {
             return (
               <div key={post.id}>
                 <h3>{post.content}</h3>
                 <p>Publicado por: {getUserName(post.userId)}</p>
                 <img src={post.imageUrl} alt={`Image for post ${post.id}`} />
               </div>
             );
           }
           return null;
         })}
       </div>
     )} */}
    </div>
  );
}

export default AllPosts;
