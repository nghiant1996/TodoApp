import React, { Component } from 'react';

class Todo extends Component{
    render(){
        const {todo} = this.props;
        return(
            <li>
                <div className="view">
                    <input type="checkbox" className="toggle" checked = {todo.isCompleted}/>
                    <label>{todo.text}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        )
    }
}

export default Todo;
