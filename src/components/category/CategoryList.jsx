import React, { Component } from "react";

import './style.css'

class CategoryList extends Component{
    
    methods = {
        _handleInput(e){
            if(e.key === "Enter"){
                console.log("Adicionando categoria")
            }
        }
    }
    render(){
        return(
            <div className="category-list">
                <ul>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <li>Categoria</li>
                    <input 
                    type="text"
                    name="" id="" className="input-category"
                    placeholder="Categoria"
                    onKeyUp={this.methods._handleInput.bind(this)}
                    />
                </ul>
                
            </div>
        )
    }
}

export default CategoryList