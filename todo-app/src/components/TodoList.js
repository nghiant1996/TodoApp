import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
   
    render(){
        const {todoList,isCheckedAll,checkAllTodos} = this.props;
        return(
            <section className="main">
                <input 
                    className="toggle-all" 
                    type="checkbox" 
                    checked={isCheckedAll}
                />
                <label htmlFor="toggle-all" onClick={checkAllTodos}></label>
                <ul className="todo-list">
                    {
                        todoList.map((todo,index) => <Todo key={`todo${todo.id}`} {...{todo}} {...this.props} index={index}/>)
                    }     
                </ul>
            </section>
        )
    } 
}

export default TodoList;