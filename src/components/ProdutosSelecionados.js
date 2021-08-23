import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/ProdutosSelecionados.css';

class ProdutosSelecionados extends Component {
  render() {
    const { produto: { thumbnail, title, price } } = this.props;
    return (
      <div className="produtos-selecionados">
        <li>
          <img className="produtos-selecionados-thumb" src={ thumbnail } alt={ title } />
          <span className="carrinho-produto-titulo">{title}</span>
          <span className="carrinho-produto-preço">{`R$ ${price}`}</span>
        </li>
      </div>
    );
  }
}

ProdutosSelecionados.propTypes = {
  produto: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProdutosSelecionados;
