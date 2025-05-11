import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./context/cartContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter basename="/Klaudia_Lota_Web_Wroclaw">
                <App />
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
);

reportWebVitals();
