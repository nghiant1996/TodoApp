import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
   
    render(){
        const {todoList} = this.props;
        return(
            <section className="main">
                <input className="toggle-all"/>
                <label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    {
                        todoList.map(todo => <Todo {...{todo}}/>)
                    }     
                </ul>
            </section>
        )
    }
}

export default TodoList;