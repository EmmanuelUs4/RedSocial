// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./AuthProvider";
import AppRouter from "./router/AppRouter";
import { PostContextProvider } from "./components/PostContex/PostContext";
import { AppProvider } from "./hooks/useAppContext";

// Envuelve tu componente principal (en este caso, AppRouter) con el AuthProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PostContextProvider>
        <AppProvider>
          <AppRouter />
        </AppProvider>
      </PostContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
