import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ProductProvider } from "./context/productContext.jsx";
import { BasketProvider } from "./context/basketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BasketProvider>
    <ToastContainer />
  </React.StrictMode>
);
