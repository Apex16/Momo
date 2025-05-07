import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext/CartProvider.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
        domain="dev-0dxli2liaejazv04.us.auth0.com"
        clientId="7KE3ds53Iuw7CfHkIVOhYg8ebf11X3Lx"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </CartProvider>
  </BrowserRouter>
);
