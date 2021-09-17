import React, { Component } from "react";

import NotesList from "./components/formCadastro";
import CardNote from "./components/cards";

import './App.css'
class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: []
    }
  }

  methods = {
    createNote(title, content){
      let newNote = {title, content}
      let newArrNotes = [...this.state.notes, newNote]
      let newState = {
        notes: newArrNotes
      }
      this.setState(newState)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="note_form">
          <NotesList criarNota={this.methods.createNote.bind(this)}/>
        </div>
        <ul className="note_list">
          {this.state.notes.map((e, index) => {
            return (
              <li key={index}>
                <CardNote 
                  title={e.title} 
                  content={e.content}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
