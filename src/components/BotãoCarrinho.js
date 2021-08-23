import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/BotãoCarrinho.css';

class BotãoCarrinho extends Component {
  mostrarQuantidade = (quantidadeTotal) => (
    <div className="quantidade-total" data-testid="shopping-cart-size">
      { quantidadeTotal }
    </div>
  )

  render() {
    const { quantidadeTotal } = this.props;
    return (
      <div className="botão-carrinho">
        <Link
          to="/carrinho"
          className="link-carrinho"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        { quantidadeTotal === 0 ? null : this.mostrarQuantidade(quantidadeTotal) }
      </div>
    );
  }
}

BotãoCarrinho.propTypes = {
  quantidadeTotal: PropTypes.number.isRequired,
};

export default BotãoCarrinho;
