import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

import '../styles/Categorias.css';

class Categorias extends Component {
  constructor() {
    super();

    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this.setCategorias();
  }

  setCategorias = async () => {
    const categoriasJson = await getCategories();
    this.setState({ categorias: categoriasJson });
  }

  render() {
    const { categorias } = this.state;
    const { atualizaCategoriaId } = this.props;
    return (
      <div className="categorias">
        <h1 className="titulo-categorias">Categorias</h1>
        <ul className="lista-categorias">
          {categorias
            .map(({ name, id }) => (
              <li key={ id }>
                <button
                  className="categoria"
                  type="button"
                  onClick={ atualizaCategoriaId }
                  data-testid="category"
                  id={ id }
                >
                  { name }
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

Categorias.propTypes = {
  atualizaCategoriaId: PropTypes.func.isRequired,
};

export default Categorias;
