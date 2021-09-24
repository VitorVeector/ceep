import React, { Component } from "react";

import './style.css'
import {ReactComponent as Delete} from "../../assets/img/delete.svg"

class ListaDeNotas extends Component {
  

  apagar(){
    let indice = this.props.indice
    this.props.delete(indice)
  }
  render() {
    return (
      <div className="cardNota">
        <header className="cardNota-header">
          <h1 className="cardNota-title">{this.props.title}</h1>
          <Delete onClick={this.apagar.bind(this)}/>
        </header>
        <p className="cardNota-text">{this.props.content}</p>
      </div>
    );
  }
}

export default ListaDeNotas;
