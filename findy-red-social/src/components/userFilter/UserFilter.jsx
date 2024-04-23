import "./userFilter.scss";
import React, { useState, useEffect } from "react";
import { usePostContext } from "../PostContex/PostContext";

const UserFilter = () => {
  const { selectedUser, posts } = usePostContext();
  const userPosts = posts.filter((post) => post.userId === selectedUser);
  const categories = [...new Set(userPosts.map((post) => post.category))];
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    console.log("Selected User:", selectedUser);
    const userPostsFiltered = userPosts;
    setFilteredPosts(userPostsFiltered);
  }, []);
  console.log("Publicaciones filtradas:", filteredPosts);

  const handleFilterByCategory = (category) => {
    console.log(`Filtrar por categoría: ${category}`);
    const filtered = userPosts.filter((post) => post.category === category);
    console.log(
      "Cantidad de publicaciones después de filtrar:",
      filtered.length
    );
    setFilteredPosts(filtered);
  };

  const handleShowAllPosts = () => {
    console.log("Mostrar todas las publicaciones:");
    console.log("Cantidad de publicaciones antes de filtrar:",
      userPosts.length
    );
    setFilteredPosts(userPosts);
  };

  const handleFilterByVideo = () => {
    console.log("Filtrar por videos:");
    const videoPosts = userPosts.filter((post) => post.category === "video");
    console.log("Cantidad de videos:", videoPosts.length);
    setFilteredPosts(videoPosts);
  };

  const handleFilterByAlbum = () => {
    console.log("Filtrar por álbum:");
    const albumPosts = userPosts.filter((post) => post.category === "album");
    console.log("Cantidad de álbumes:", albumPosts.length);
    setFilteredPosts(albumPosts);
  };

  const handleFilterByTags = () => {
    console.log("Filtrar por tags:");
    const tagsPosts = userPosts.filter((post) => post.category === "tags");
    console.log("Cantidad de álbumes:", tagsPosts.length);
    setFilteredPosts(tagsPosts);
  };

  return (
    <div className="containerFilter">
      <div className="containerButton">
        <button onClick={handleShowAllPosts}>Todas</button>
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleFilterByCategory(category)}>
            {category}
          </button>
        ))}
        <button onClick={handleFilterByVideo}>Videos</button>
        <button onClick={handleFilterByAlbum}>Álbum</button>
        <button onClick={handleFilterByTags}>Tags</button>
      </div>
      <div className="containerPostWrapper">
        {" "}
        {filteredPosts.length === 0 ? (
          <p>No hay publicaciones aún</p>
        ) : (
          filteredPosts.map((post) => (
            <div className="imageContainer" key={post.id}>
              {post.category === "image" && (
                <img src={post.imageUrl} alt="Imagen" />
              )}
              {post.category === "video" && (
                <video src={post.videoUrl} controls />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserFilter;
