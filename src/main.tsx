import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MovieProvider } from "./context/MovieContext.tsx";

createRoot(document.getElementById("root")!).render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
