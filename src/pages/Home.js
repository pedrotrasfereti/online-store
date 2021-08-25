import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categorias from '../components/Categorias';
import Produtos from '../components/Produtos';

import BotãoCarrinho from '../components/BotãoCarrinho';
import '../styles/Home.css';
import Carregando from '../components/Carregando';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categoriaId: '',
      termoBusca: '',
      produtos: [],
      carregando: false,
    };
  }

  executaBusca = async () => {
    const { categoriaId, termoBusca } = this.state;
    this.setState({ carregando: true });
    const produtos = await getProductsFromCategoryAndQuery(categoriaId, termoBusca);
    this.setState({ produtos: produtos.results, carregando: false });
  }

  atualizaTermo = ({ target }) => {
    const { value } = target;
    this.setState({ termoBusca: value });
  }

  atualizaCategoriaId = ({ target }) => {
    const { id } = target;
    this.setState({ categoriaId: id }, () => {
      this.executaBusca();
    });
  }

  mostrarMensagemInicial = () => (
    <p
      className="principal-mensagem-inicial"
      data-testid="home-initial-message"
    >
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  mostrarProdutos = () => {
    const { gestorDoCarrinho, guardaProdutoClicado } = this.props;
    const { produtos } = this.state;
    return (<Produtos
      produtos={ produtos }
      gestorDoCarrinho={ gestorDoCarrinho }
      guardaProdutoClicado={ guardaProdutoClicado }
    />);
  }

  render() {
    const { produtos, carregando } = this.state;
    const { quantidadeTotal } = this.props;

    return (
      <main>
        <Categorias atualizaCategoriaId={ this.atualizaCategoriaId } />
        <div className="principal-container">
          <div className="principal-topo">
            <input
              type="text"
              className="campo-de-busca"
              data-testid="query-input"
              onChange={ this.atualizaTermo }
              onFocus={ ({ target }) => { target.placeholder = ''; } }
              onBlur={ ({ target }) => {
                target.placeholder = 'Pesquisar produtos, marcas e muito mais...';
              } }
              placeholder="Pesquisar produtos, marcas e muito mais..."
            />
            <button
              type="button"
              className="botão-de-busca"
              onClick={ this.executaBusca }
              data-testid="query-button"
            >
              Buscar
            </button>
            <div className="principal-botao-carrinho">
              <BotãoCarrinho
                quantidadeTotal={ quantidadeTotal }
              />
            </div>
          </div>
          <div className="principal-produtos">
            { produtos.length ? null : this.mostrarMensagemInicial() }
            {carregando ? (<Carregando />) : this.mostrarProdutos()}
          </div>
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  quantidadeTotal: PropTypes.number.isRequired,
  gestorDoCarrinho: PropTypes.func.isRequired,
  guardaProdutoClicado: PropTypes.func.isRequired,
};

export default Home;
