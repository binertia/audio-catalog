import React , { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import './scss/style.scss'



const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);;

root.render(
  
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

