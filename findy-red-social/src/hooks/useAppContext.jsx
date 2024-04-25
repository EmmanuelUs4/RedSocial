import React, { createContext, useContext, useReducer } from 'react';

// Definir el estado inicial
const initialState = {
  posts: [],
};

// Definir acciones
const ACTIONS = {
  ADD_POST: 'ADD_POST',
};

// Reducer para manejar las acciones
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
}

// Crear el contexto
const AppContext = createContext();

// Proveedor del contexto
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
