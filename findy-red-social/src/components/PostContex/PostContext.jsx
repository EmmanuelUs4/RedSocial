import React, { createContext, useContext, useReducer } from "react";

// 1. Crear el contexto
export const PostContext = createContext();
export const setSelectedUser = (dispatch, userId) => {
  dispatch ({type: "setSelectedUser", payload: userId});
};

// 2. Definir el estado inicial y el reducer
const initialState = {
  posts: [],
  comments: [],
  selectedPost: null,
  filterCategory: "all",
  selectedUser: null
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "setPosts":
      return {
        ...state,
        posts: action.data,
      };
      case "setComments":
      return {
        ...state,
        comments: action.data,
      };
    case "selectpost":
      return {
        ...state,
        selectedPost: action.payload,
      };
      case "addComment": 
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
      case "setSelectedUser":
      return {
        ...state,
        selectedUser: action.payload,
      };
      case "setFilterCategory":
      return {
        ...state,
        filterCategory: action.category,
      };
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
