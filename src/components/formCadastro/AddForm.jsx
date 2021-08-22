import React, {Component} from "react";
import './style.css'

 class AddForm extends Component{
  constructor(props){
    super(props);
    this.title = "";
    this.content = "";
    console.log(this.title)
  }
  
  methods = {
    _handleChangeTitle(e){
      e.stopPropagation();
      this.title = e.target.value
    },
    _handleChangeContent(e){
      e.stopPropagation();
      this.content = e.target.value
    },
    _createNote(e){
      e.preventDefault();
      e.stopPropagation();
      this.props.criarNota(this.title, this.content);
    }
  }
  
  render() {
    return (
      <div className="form">
        <form 
          className="form-cadastro"
          onSubmit={this.methods._createNote.bind(this)}
          >
          <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="Título"
            className="form-cadastro_input"
            onChange={this.methods._handleChangeTitle.bind(this)}/>
          <textarea
            rows={15}
            name="note"
            id="note"
            placeholder="Escreva sua nota..."
            className="form-cadastro_input"
            onChange={this.methods._handleChangeContent.bind(this)}
          />
          <button className="form-cadastro_input form-cadastro_submit">Criar nota!</button>
        </form>
      </div>
    );
  }
}

export default AddForm