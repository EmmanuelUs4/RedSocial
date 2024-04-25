// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./AuthProvider";
import AppRouter from "./router/AppRouter";

// Envuelve tu componente principal (en este caso, AppRouter) con el AuthProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
