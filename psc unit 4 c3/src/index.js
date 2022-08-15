import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppContextProviderComponent from "./Context/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProviderComponent>
        <App />
      </AppContextProviderComponent>
    </BrowserRouter>
  </StrictMode>
);
