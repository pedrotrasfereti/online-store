import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutInfo extends Component {
  render() {
    const {
      gerenciadorDoForm,
      nomeCompleto,
      email,
      cpf,
      telefone,
      cep,
      endereço,
    } = this.props;

    return (
      <fieldset className="checkout-formulário-info">
        <legend>Informações do comprador</legend>
        <input
          type="text"
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          name="nomeCompleto"
          onChange={ gerenciadorDoForm }
          value={ nomeCompleto }
          required
          className="form-control"
        />
        <input
          type="email"
          data-testid="checkout-email"
          placeholder="Email"
          name="email"
          onChange={ gerenciadorDoForm }
          value={ email }
          required
          className="form-control"
        />
        <input
          type="type"
          data-testid="checkout-cpf"
          placeholder="CPF"
          name="cpf"
          onChange={ gerenciadorDoForm }
          value={ cpf }
          required
          className="form-control"
        />
        <input
          type="type"
          data-testid="checkout-phone"
          placeholder="Telefone"
          name="telefone"
          onChange={ gerenciadorDoForm }
          value={ telefone }
          required
          className="form-control"
        />
        <input
          type="type"
          data-testid="checkout-cep"
          placeholder="CEP"
          name="cep"
          onChange={ gerenciadorDoForm }
          value={ cep }
          required
          className="form-control"
        />
        <input
          type="type"
          data-testid="checkout-address"
          placeholder="Endereço"
          name="endereço"
          onChange={ gerenciadorDoForm }
          value={ endereço }
          required
          className="form-control"
        />
      </fieldset>
    );
  }
}

CheckoutInfo.propTypes = {
  gerenciadorDoForm: PropTypes.func.isRequired,
  nomeCompleto: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  telefone: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  endereço: PropTypes.string.isRequired,
};

export default CheckoutInfo;
