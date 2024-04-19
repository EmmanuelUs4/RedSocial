import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import { PostContextProvider } from "./components/PostContex/PostContext";
import { AppProvider } from "./hooks/useAppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostContextProvider>
    <AppProvider>
      <AppRouter />
      </AppProvider>
    </PostContextProvider>
  </React.StrictMode>
);
