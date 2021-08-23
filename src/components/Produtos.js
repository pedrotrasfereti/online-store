import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Produtos.css';

class Produtos extends React.Component {
  renderProduto = (produto) => {
    const {
      id,
      title,
      thumbnail,
      price,
      shipping: { free_shipping: freeShipping },
    } = produto;
    const { gestorDoCarrinho, guardaProdutoClicado } = this.props;

    return (
      <li key={ id } data-testid="product">
        <div className="produto-container">
          <span className="produto-titulo">{ title }</span>
          <div className="produto-thumb-container">
            <img className="produto-thumb" src={ thumbnail } alt={ title } />
          </div>
          {freeShipping && (
            <div className="produto-frete-gratis-container">
              <i
                data-testid="free-shipping"
                className="produto-frete-gratis fas fa-shipping-fast"
              />
            </div>
          )}
          <span className="produto-preço">{ `R$ ${price}` }</span>
          <button
            className="produto-botão-add"
            type="button"
            data-testid="product-add-to-cart"
            onClick={ (event) => gestorDoCarrinho(event, produto) }
          >
            Adicionar ao Carrinho
          </button>
          <Link
            to={ `/produto/${id}` }
            onClick={ () => guardaProdutoClicado(produto) }
            data-testid="product-detail-link"
          >
            Ver Detalhes
          </Link>
        </div>
      </li>
    );
  };

  render() {
    const { produtos } = this.props;

    return (
      <ul className="produto-lista">
        { produtos.map((produto) => this.renderProduto(produto)) }
      </ul>
    );
  }
}

Produtos.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  gestorDoCarrinho: PropTypes.func.isRequired,
  guardaProdutoClicado: PropTypes.func.isRequired,
};

export default Produtos;
