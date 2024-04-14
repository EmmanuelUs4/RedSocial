import React, { createContext, useContext, useReducer } from "react";

// 1. Crear el contexto
const PostContext = createContext();

// 2. Definir el estado inicial y el reducer
const initialState = {
  posts: [],
  selectedPost: null
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "setPosts":
      return {
        ...state,
        posts: action.data,
      };
    case "selectpost":
      return {
        ...state,
        selectedPost: action.payload,
      };
    // case "addPost":
    //   return {
    //     ...state,
    //     posts: [...state.posts, action.payload],
    //   };
    // case "editPost":
    //   const { index, newData } = action.payload;
    //   const updatedPosts = [...state.posts];
    //   updatedPosts[index] = { ...updatedPosts[index], ...newData };
    //   return {
    //     ...state,
    //     posts: updatedPosts,
    //   };
    // case "removePost":
    //   const postId = action.payload;
    //   const filteredPosts = state.posts.filter((post) => post.id !== postId);
    //   return {
    //     ...state,
    //     posts: filteredPosts,
    //   };
    default:
      return state;
  }
};

// 3. Proveedor del contexto
export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

// 4. Hook personalizado para consumir el contexto
export const usePostContext = () => {
  return useContext(PostContext);
};
