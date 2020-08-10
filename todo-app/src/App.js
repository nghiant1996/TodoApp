import React, { Component } from 'react';
import './App.css';
import './css/Todo.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoList: [
        {
          id: 1,
          text: 'Todo 1',
          isCompleted: true
        },
        {
          id: 2,
          text: 'Todo 2',
          isCompleted: true
        },
        {
          id: 3,
          text: 'Todo 3',
          isCompleted: false
        }
    ]
    }
  }
  render(){
    const {todoList} = this.state;
    return (
      <div className="todoapp">
        <Header />
        <TodoList todoList={todoList}/>
        <Footer />
      </div>
    );
  }
}

export default App;
