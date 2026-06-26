import { createRoot } from "react-dom/client";
import "./app/index.css"
import App from "./app/App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
    <AuthProvider>
  <App />
    </AuthProvider>

);
