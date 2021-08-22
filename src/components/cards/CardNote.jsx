import React, { Component } from "react";

import './style.css'

class ListaDeNotas extends Component {
  
  render() {
    return (
      <div className="cardNota">
        <header className="cardNota-header">
          <h1 className="cardNota-title">{this.props.title}</h1>
        </header>
        <p className="cardNota-text">{this.props.content}</p>
      </div>
    );
  }
}

export default ListaDeNotas;
