import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render(){
        return(
            <section className="main">
                <input className="toggle-all"/>
                <label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    <Todo />
                </ul>
            </section>
        )
    }
}

export default TodoList;