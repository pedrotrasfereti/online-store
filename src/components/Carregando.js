import React, { Component } from 'react';

class Carregando extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center p-5">
        <div className="spinner-border" role="status">
          <span className="sr-only" />
        </div>
      </div>
      // <div className="spinner-border text-secondary" role="status" />
    );
  }
}

export default Carregando;
