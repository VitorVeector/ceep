import React, { Component } from "react";

import NotesList from "./components/formCadastro";
import CardNote from "./components/cards";

import './App.css'
class App extends Component {

  constructor(){
    super();
    this.notes = [];
    this.state = {}
  }

  methods = {
    createNote(title, content){
      let newNote = {
        title: title,
        content: content
      }
      this.notes.push(newNote)
      console.log(this.notes.length)
      this.setState({
        notas: this.notes
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="note_form">
          <NotesList criarNota={this.methods.createNote.bind(this)}/>
        </div>
        <ul className="note_list">
          {this.notes.map((e, index) => {
            return (
              <li key={index}>
                <CardNote 
                  title={this.notes[index].title} 
                  content={this.notes[index].content}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
