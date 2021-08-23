import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/BotãoVoltar.css';

class BotãoVoltar extends Component {
  render() {
    const { destino } = this.props;
    return (
      <div className="botão-voltar">
        <Link className="link-voltar" to={ destino }>
          Voltar
        </Link>
      </div>
    );
  }
}

BotãoVoltar.propTypes = {
  destino: PropTypes.string.isRequired,
};

export default BotãoVoltar;
