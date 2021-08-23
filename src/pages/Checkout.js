import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProdutosSelecionados from '../components/ProdutosSelecionados';

import BarraTopo from '../components/BarraTopo';

import '../styles/Checkout.css';

import CheckoutInfo from '../components/CheckoutInfo';
import CheckoutPagamento from '../components/CheckoutPagamento';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      nomeCompleto: '',
      email: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereço: '',
      pagamento: '',
      redirecionar: false,
    };
  }

  gerenciadorDoForm = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  limparForm = () => {
    const { esvaziarCarrinho } = this.props;
    const {
      nomeCompleto,
      email,
      cpf,
      telefone,
      cep,
      endereço,
      pagamento,
    } = this.state;

    if (
      nomeCompleto && email && cpf && telefone && cep && endereço && pagamento
    ) {
      this.setState({
        nomeCompleto: '',
        email: '',
        cpf: '',
        telefone: '',
        cep: '',
        endereço: '',
        pagamento: '',
      }, () => {
        esvaziarCarrinho();
        this.setState({ redirecionar: true });
      });
    }
  }

  render() {
    const {
      nomeCompleto,
      email,
      cpf,
      telefone,
      cep,
      endereço,
      redirecionar,
    } = this.state;

    const { produtos } = this.props;
    const checkout = () => (
      <section className="checkout">
        <BarraTopo
          destino="/carrinho"
          mostrarCarrinho={ false }
        />
        <div className="checkout-produtos-selecionados">
          <h1 className="checkout-produtos-selecionados-titulo">Revise seus produtos</h1>
          <ol className="checkout-lista-produtos-selecionados">
            {produtos
              .map((produto) => (<ProdutosSelecionados
                key={ produto.id }
                produto={ produto }
              />))}
          </ol>
        </div>
        <form className="checkout-formulário">
          <CheckoutInfo
            gerenciadorDoForm={ this.gerenciadorDoForm }
            nomeCompleto={ nomeCompleto }
            email={ email }
            cpf={ cpf }
            telefone={ telefone }
            cep={ cep }
            endereço={ endereço }
          />
          <CheckoutPagamento gerenciadorDoForm={ this.gerenciadorDoForm } />
          <button
            type="submit"
            onClick={ this.limparForm }
            className="btn btn-primary"
          >
            Comprar
          </button>
        </form>
      </section>
    );

    return (
      <div>
        {redirecionar ? <Redirect to="/" /> : checkout()}
      </div>
    );
  }
}

Checkout.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  esvaziarCarrinho: PropTypes.func.isRequired,
};

export default Checkout;
