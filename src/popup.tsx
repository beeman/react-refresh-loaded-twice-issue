import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./pages/Popup";
import {Providers} from "./providers";

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
      <Providers>
            <Popup />
      </Providers>
  </React.StrictMode>
);
