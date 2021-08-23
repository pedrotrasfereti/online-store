import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BotãoCarrinho from './BotãoCarrinho';
import BotãoVoltar from './BotãoVoltar';

import '../styles/BarraTopo.css';

class BarraTopo extends Component {
  render() {
    const { destino, mostrarCarrinho, quantidadeTotal } = this.props;
    return (
      <div className="barra-topo">
        <BotãoVoltar destino={ destino } />

        { mostrarCarrinho ? (
          <BotãoCarrinho
            quantidadeTotal={ quantidadeTotal }
          />
        ) : null}
      </div>
    );
  }
}

BarraTopo.defaultProps = {
  quantidadeTotal: 0,
};

BarraTopo.propTypes = {
  destino: PropTypes.string.isRequired,
  mostrarCarrinho: PropTypes.bool.isRequired,
  quantidadeTotal: PropTypes.number,
};

export default BarraTopo;
