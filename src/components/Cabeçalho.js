import React, { Component } from 'react';

import '../styles/Cabeçalho.css';

import Logo from '../images/icone-cabeçalho.svg';

class Cabeçalho extends Component {
  render() {
    return (
      <header>
        <img className="logo-cabeçalho" src={ Logo } alt="Front-End Online Store" />
        <h1 className="titulo-cabeçalho">Front-End Online Store</h1>
      </header>
    );
  }
}

export default Cabeçalho;
