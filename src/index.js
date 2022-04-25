import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas 
import ListagemGit from './presentation/view/ListagemGit/ListagemGit';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importante adicionar para o react-bootstrap funcionar
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListagemGit} />

      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

