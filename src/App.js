import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProdutoDetalhado from './pages/ProdutoDetalhado';

import Cabeçalho from './components/Cabeçalho';
import Rodapé from './components/Rodapé';

class App extends React.Component {
  constructor() {
    super();

    if (!JSON
      .parse(localStorage.getItem('carrinho'))) {
      localStorage
        .setItem('carrinho', JSON.stringify([]));
    }
    this.state = {
      carrinho: JSON.parse(localStorage.getItem('carrinho')),
      produtoClicado: '',
      quantidadeTotal: 0,
    };
  }

  componentDidMount() {
    this.inserirQuantidadeTotal();
  }

  inserirQuantidadeTotal = () => {
    this.setState(({ carrinho }) => ({
      quantidadeTotal: carrinho.length,
    }));
  }

  verificaRepetição = (produto) => {
    const { carrinho } = this.state;
    const produtoEncontrado = carrinho.find(({ id }) => id === produto.id);
    return produtoEncontrado;
  }

  addAoCarrinho = ({ target }, produto) => {
    if (!this.verificaRepetição(produto)) {
      this.setState(({ carrinho }) => ({
        carrinho: [...carrinho, produto],
      }), () => {
        this.setState(({ carrinho }) => ({
          quantidadeTotal: carrinho.length,
        }));
        const { carrinho } = this.state;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        target.disabled = true;
      });
    }
  };

  gerenciarQuantidadeTotal = (operação) => {
    if (operação === 'diminuir') {
      this.setState(({ quantidadeTotal }) => ({
        quantidadeTotal: quantidadeTotal - 1,
      }));
    } else {
      this.setState(({ quantidadeTotal }) => ({
        quantidadeTotal: quantidadeTotal + 1,
      }));
    }
  }

  removerItemDoCarrinho = (id, quantidade) => {
    const { carrinho } = this.state;
    const carrinhoFiltrado = carrinho.filter((produto) => produto.id !== id);
    this.setState(({ quantidadeTotal }) => ({
      carrinho: carrinhoFiltrado,
      quantidadeTotal: quantidadeTotal - quantidade,
    }), () => {
      localStorage.setItem('carrinho', JSON.stringify(carrinhoFiltrado));
    });
  }

  esvaziarCarrinho = () => {
    this.setState({ carrinho: [] });
    localStorage.removeItem('carrinho');
    this.inserirQuantidadeTotal();
  }

  guardaProdutoClicado = (produto) => {
    this.setState({ produtoClicado: produto });
  }

  renderHome = () => {
    const { quantidadeTotal } = this.state;
    return (<Home
      quantidadeTotal={ quantidadeTotal }
      gestorDoCarrinho={ this.addAoCarrinho }
      guardaProdutoClicado={ this.guardaProdutoClicado }
    />);
  };

  renderProdutoDetalhado = () => {
    const { produtoClicado, quantidadeTotal } = this.state;
    return (<ProdutoDetalhado
      produto={ produtoClicado }
      quantidadeTotal={ quantidadeTotal }
      gestorDoCarrinho={ this.addAoCarrinho }
    />);
  };

  render() {
    const { carrinho } = this.state;

    return (
      <Router>
        <Cabeçalho />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => this.renderHome() }
          />
          <Route
            path="/carrinho"
            render={ () => (
              <Carrinho
                gerenciarQuantidadeTotal={ this.gerenciarQuantidadeTotal }
                removerItemDoCarrinho={ this.removerItemDoCarrinho }
                produtos={ carrinho }
              />
            ) }
          />
          <Route
            path="/checkout"
            render={
              () => (<Checkout
                esvaziarCarrinho={ this.esvaziarCarrinho }
                produtos={ carrinho }
              />)
            }
          />
          <Route
            path="/produto/:id"
            render={ () => this.renderProdutoDetalhado() }
          />
        </Switch>
        <Rodapé />
      </Router>
    );
  }
}

export default App;
