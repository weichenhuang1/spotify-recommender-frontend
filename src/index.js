import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecommendationProvider } from "./context/RecommendationContext";
import "./index.css"; // Optional styling

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <RecommendationProvider>
            <App />
        </RecommendationProvider>
    </BrowserRouter>
);