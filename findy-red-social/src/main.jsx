import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
import { PostContextProvider } from "./components/PostContex/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostContextProvider>
      <AppRouter />
    </PostContextProvider>
  </React.StrictMode>
);
