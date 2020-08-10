import React, { Component } from 'react';

class Todo extends Component{
    render(){
        return(
            <li>
                <div className="view">
                    <input className="toggle" />
                    <label>Todo</label>
                    <button className="destroy"></button>
                </div>
            </li>
        )
    }
}

export default Todo;
