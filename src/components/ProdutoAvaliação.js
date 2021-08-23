import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/ProdutoAvaliação.css';

class ProdutoAvaliação extends Component {
  render() {
    const { adicionaAvaliacao, atualizarEstado } = this.props;
    return (
      <form className="avaliação-container">
        <h1 className="avaliação-titulo">
          Avalie o produto:
        </h1>
        <div className="avaliação">
          <span>Avaliação:</span>
          <label htmlFor="1" className="form-check-label">
            <input
              type="radio"
              id="1"
              className="avaliação-input form-check-input"
              name="avaliacaoProduto"
              value="1"
              onChange={ atualizarEstado }
            />
            1
          </label>
          <label htmlFor="2" className="form-check-label">
            <input
              type="radio"
              id="2"
              className="avaliação-input form-check-input"
              name="avaliacaoProduto"
              value="2"
              onChange={ atualizarEstado }
            />
            2
          </label>
          <label htmlFor="3" className="form-check-label">
            <input
              type="radio"
              id="3"
              className="avaliação-input form-check-input"
              name="avaliacaoProduto"
              value="3"
              onChange={ atualizarEstado }
            />
            3
          </label>
          <label htmlFor="4" className="form-check-label">
            <input
              type="radio"
              id="4"
              className="avaliação-input form-check-input"
              name="avaliacaoProduto"
              value="4"
              onChange={ atualizarEstado }
            />
            4
          </label>
          <label htmlFor="5" className="form-check-label">
            <input
              type="radio"
              id="5"
              className="avaliação-input form-check-input"
              name="avaliacaoProduto"
              value="5"
              onChange={ atualizarEstado }
            />
            5
          </label>
        </div>
        <div>
          <label htmlFor="avaliação-comentario" className="avaliação-comentario-label">
            Deixe seu comentário:
            <textarea
              className="avaliação-comentário form-control"
              name="avaliacaoComentario"
              onChange={ atualizarEstado }
              data-testid="product-detail-evaluation"
            />
          </label>
        </div>
        <button
          type="button"
          className="avaliação-botão-enviar btn btn-primary"
          onClick={ adicionaAvaliacao }
        >
          Avaliar
        </button>
      </form>
    );
  }
}

ProdutoAvaliação.propTypes = {
  adicionaAvaliacao: PropTypes.func.isRequired,
  atualizarEstado: PropTypes.func.isRequired,
};

export default ProdutoAvaliação;
