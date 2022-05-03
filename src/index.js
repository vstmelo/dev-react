import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Páginas
import ListagemGit from "./presentation/view/Listagem/ListagemGit";

import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListagemGit/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);