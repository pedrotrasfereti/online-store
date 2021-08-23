import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckoutPagamento extends Component {
  render() {
    const { gerenciadorDoForm } = this.props;
    return (
      <fieldset className="checkout-formulário-pagamento">
        <legend>Método de pagamento</legend>
        <div className="checkout-formulário-pagamento-inputs">
          <label htmlFor="boleto">
            <input
              type="radio"
              id="boleto"
              value="boleto"
              name="pagamento"
              className="checkout-formulário-pagamento-input form-check-input"
              onClick={ gerenciadorDoForm }
              required
            />
            Boleto
          </label>
          <label htmlFor="visa">
            <input
              type="radio"
              id="visa"
              value="visa"
              name="pagamento"
              className="checkout-formulário-pagamento-input form-check-input"
              onClick={ gerenciadorDoForm }
            />
            Visa
          </label>
          <label htmlFor="mastercard">
            <input
              type="radio"
              id="mastercard"
              value="mastercard"
              name="pagamento"
              className="checkout-formulário-pagamento-input form-check-input"
              onClick={ gerenciadorDoForm }
            />
            MasterCard
          </label>
          <label htmlFor="elo">
            <input
              type="radio"
              id="elo"
              value="elo"
              name="pagamento"
              className="checkout-formulário-pagamento-input form-check-input"
              onClick={ gerenciadorDoForm }
            />
            Elo
          </label>
        </div>
      </fieldset>
    );
  }
}

CheckoutPagamento.propTypes = {
  gerenciadorDoForm: PropTypes.func.isRequired,
};

export default CheckoutPagamento;
