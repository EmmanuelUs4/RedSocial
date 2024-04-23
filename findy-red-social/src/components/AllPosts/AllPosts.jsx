import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { usePostContext } from "../PostContex/PostContext";
import "./allPosts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { getComments, getPosts, getUsers } from "../../services/services";

function AllPosts() {
  const { posts, comments, dispatch, selectedPost } = usePostContext();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleData = useCallback(async () => {
    try {
      const userData = await getUsers();
      const postsData = await getPosts();
      const commentsData = await getComments();

      setUsers(userData);
      dispatch({ type: "setPosts", data: postsData });
      dispatch({ type: "setComments", data: commentsData });

      console.log("Publicaciones cargadas:", postsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  const handleSelectPost = (postId) => {
    const selectedPost = posts.find((post) => post.id === postId);
    const likeCount = getLikeCount(postId);
    const commentCount = getCommentCount(postId);

    const updatedSelectedPost = { ...selectedPost, likes: likeCount, comments: commentCount };

    dispatch({ type: "selectpost", payload: updatedSelectedPost });
    navigate(`/details/${postId}`);
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === parseInt(userId));
    return user ? user.name : "Unknown User";
  };

  const getUserProfileUrl = (userId) => {
    const user = users.find((user) => user.id === parseInt(userId));
    return user ? user.profileUrl : "";
  };

  const handleLikeClick = (postId, userId, e) => {
    e.stopPropagation();
    console.log("user ID:", userId);
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        const liked = !post.liked;
        const likes = liked ? post.likes + 1 : post.likes - 1;
        return { ...post, liked, likes };
      }
      return post;
    });
    dispatch({ type: "setPosts", data: updatedPosts });
  };

  const getLikeCount = (postId) => {
    const post = posts.find((post) => post.id === postId);
    return post ? post.likes : 0;
  };

  const handleCommentClick = (postId, e) => {
    e.stopPropagation();
    const postComments = comments.filter(
      (comment) => comment.postId === postId
    );
    console.log("Comments for post ID", postId, ":", postComments);
  };

  const getCommentCount = (postId) => {
    const postComments = comments.filter(
      (comment) => comment.postId === postId
    );
    return postComments.length;
  };

  const handleUserNameClick = (userId, e) => {
    e.stopPropagation();
    navigate(`/users/${userId}`);
    dispatch({ type: "setSelectedUser", payload: userId });
    console.log("User ID:", userId);
  }

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
              <span className="nameProfile" onClick={(e) =>handleUserNameClick(item.userId, e)}>{getUserName(item.userId)}</span>
            </div>
            <div>
              <img
                className="imagePost"
                src={item.imageUrl}
                alt={`Image for post ${item.id}`}
              />
              <div className="postInfoOverlay">
                <div
                  className="postInfo"
                  onClick={(e) => handleLikeClick(item.id, item.userId, e)}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: item.liked ? "red" : "black" }}
                  />
                  <span>{getLikeCount(item.id)}</span>{" "}
                  {/* Aquí debería mostrarse el número actual de "me gusta" */}
                </div>
                <div
                  className="postInfo"
                  onClick={(e) => handleCommentClick(item.id, e)}
                >
                  <FontAwesomeIcon icon={faCommentAlt} />
                  <span>{getCommentCount(item.id)}</span>
                </div>
                <div className="postInfo">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>{getCommentCount(item.id)}</span>
                </div>
              </div>
            </div>
            <div className="textPosts">
              <span className="nameDescription">
                {getUserName(item.userId)}
              </span>
              <span className="textContent">{item.content}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllPosts;
