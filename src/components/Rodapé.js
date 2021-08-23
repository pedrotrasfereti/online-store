import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../styles/Rodapé.css';

class Rodapé extends Component {
  render() {
    return (
      <footer>
        <Link
          to={
            { pathname: 'https://github.com/tryber/sd-013-a-project-frontend-online-store/tree/main-group-2' }
          }
          target="_blank"
        >
          Ir para o Repositório
        </Link>
      </footer>
    );
  }
}

export default Rodapé;
