import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/ProdutoDetalhado.css';

import ProdutoAvaliação from '../components/ProdutoAvaliação';
import BarraTopo from '../components/BarraTopo';

class ProdutoDetalhado extends Component {
  constructor() {
    super();

    this.state = {
      avaliacaoProduto: '',
      avaliacaoComentario: '',
      lista: [],
    };
  }

  atualizarEstado = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  adicionaAvaliacao = () => {
    const { avaliacaoProduto, avaliacaoComentario } = this.state;
    const novaAvalicao = {
      avaliacaoProduto,
      avaliacaoComentario,
    };
    this.setState(({ lista }) => ({ lista: [...lista, novaAvalicao] }));
  }

  renderAvaliacao = (item) => {
    const { avaliacaoProduto, avaliacaoComentario } = item;
    return (
      <li>
        <span className="avaliações-avaliação">{avaliacaoProduto}</span>
        <q className="avaliações-comentario">{avaliacaoComentario}</q>
      </li>
    );
  }

  renderListaAvaliação = (lista) => (
    <ul className="produto-detalhado-lista-avaliações">
      {lista.map((item) => this.renderAvaliacao(item))}
    </ul>
  );

  renderSemAvaliação = () => (
    <span className="produto-detalhado-sem-avaliações">
      Nenhuma avaliação foi feita ainda.
    </span>
  );

  render() {
    const {
      produto,
      quantidadeTotal,
      gestorDoCarrinho,
    } = this.props;

    const { price, thumbnail, title } = produto;
    const { lista } = this.state;

    return (
      <section className="produto-detalhado">
        <BarraTopo
          destino="/"
          mostrarCarrinho
          quantidadeTotal={ quantidadeTotal }
        />
        <div className="produto-detalhado-container">
          <h1
            className="produto-detalhado-titulo"
            data-testid="product-detail-name"
          >
            { title }
          </h1>
          <div className="produto-detalhado-thumb-container">
            <img className="produto-detalhado-thumb" src={ thumbnail } alt={ title } />
          </div>
          <span className="produto-detalhado-preço">{ `R$ ${price}` }</span>
          <button
            type="button"
            className="btn btn-success"
            data-testid="product-detail-add-to-cart"
            onClick={ () => gestorDoCarrinho(produto) }
          >
            Adicionar ao Carrinho
          </button>
          <div className="produto-detalhado-avaliação">
            <ProdutoAvaliação
              adicionaAvaliacao={ this.adicionaAvaliacao }
              atualizarEstado={ this.atualizarEstado }
            />
            <div className="avaliações-container">
              {lista.length === 0 ? (
                this.renderSemAvaliação()
              ) : (
                this.renderListaAvaliação(lista)
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ProdutoDetalhado.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  quantidadeTotal: PropTypes.number.isRequired,
  gestorDoCarrinho: PropTypes.func.isRequired,
};

export default ProdutoDetalhado;
