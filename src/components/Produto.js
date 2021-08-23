import React, { Component } from 'react';
import PropTypes from 'prop-types';

import iconeDeletar from '../images/icone-deletar.svg';
import iconeRemover from '../images/icone-remover.svg';
import iconeAdicionar from '../images/icone-adicionar.svg';

import '../styles/Produto.css';

class Produto extends Component {
  constructor() {
    super();

    this.state = {
      quantidade: 1,
    };
  }

  gerenciarQuantidade = ({ target: { id } }) => {
    const {
      gerenciarQuantidadeTotal,
      produto: { available_quantity: availableQuantity },
    } = this.props;

    if (id === 'diminuir') {
      this.setState(({ quantidade }) => ({
        quantidade: quantidade - 1,
      }), () => {
        const { quantidade } = this.state;
        if (quantidade < 1) {
          this.setState({ quantidade: 1 });
        } else {
          gerenciarQuantidadeTotal(id);
        }
      });
    } else if (id === 'aumentar') {
      this.setState(({ quantidade }) => ({
        quantidade: quantidade + 1,
      }), () => {
        const { quantidade } = this.state;
        if (quantidade >= availableQuantity) {
          this.setState({ quantidade: availableQuantity });
        } else {
          gerenciarQuantidadeTotal(id);
        }
      });
    }
  }

  render() {
    const { produto: { id, title, thumbnail, price } } = this.props;
    const { quantidade } = this.state;
    const { removerItemDoCarrinho } = this.props;

    return (
      <li className="carrinho-produto">
        <button
          type="button"
          id="remover"
          className="carrinho-produto-botão-deletar"
          onClick={ () => removerItemDoCarrinho(id, quantidade) }
        >
          <img src={ iconeDeletar } alt="Deletar produto" />
        </button>
        <img className="carrinho-produto-thumb" src={ thumbnail } alt={ title } />
        <span
          className="carrinho-produto-titulo"
          data-testid="shopping-cart-product-name"
        >
          { title }
        </span>
        <span className="carrinho-produto-preço">{`R$ ${price}`}</span>
        <div className="carrinho-produto-quantidade-container">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            id="diminuir"
            className="carrinho-produto-botão-quantidade"
            onClick={ this.gerenciarQuantidade }
          >
            <img src={ iconeRemover } alt="Remover item" />
          </button>
          <span data-testid="shopping-cart-product-quantity">{ quantidade }</span>
          <button
            data-testid="product-increase-quantity"
            type="button"
            id="aumentar"
            className="carrinho-produto-botão-quantidade"
            onClick={ this.gerenciarQuantidade }
          >
            <img src={ iconeAdicionar } alt="Adicionar item" />
          </button>
        </div>
      </li>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
    available_quantity: PropTypes.number,
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  removerItemDoCarrinho: PropTypes.func.isRequired,
  gerenciarQuantidadeTotal: PropTypes.func.isRequired,
};

export default Produto;
