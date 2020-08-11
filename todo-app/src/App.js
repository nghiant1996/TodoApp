import React, { Component } from 'react';

import './App.css';
import './css/Todo.css';

import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


const isNotCheckedAll = (todos = []) => todos.find(todo => !todo.isCompleted)

const filterByStatus = (todos = [], status = '', id = '') => {
  switch(status){
    case 'ACTIVE':
      return todos.filter(todo => !todo.isCompleted);
    case 'COMPLETED':
      return todos.filter(todo => todo.isCompleted);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== id)
    default:
      return todos
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
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
      ],
      todoEditingId: '',
      isCheckedAll: false,
      status: 'ALL'
    };
  }

  componentWillMount(){
    this.setState({
      isCheckedAll: !isNotCheckedAll(this.state.todoList)
    })
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    }) 
  }
  onAddTodo(event){
    const {todoList} = this.state;
    if(event.key === 'Enter'){
      const value = event.target.value;
      const newTodo = {
        id: new Date().valueOf(),
        text: value,
        isCompleted: false
      }
      this.setState({
        newItem: '',
        todoList: [
          newTodo,
          ...todoList
        ]
      })
    } 
    
  }

  getTodoEditingId(id){
    this.setState({
      todoEditingId: id
    })
  }

  onEditTodo = (todo={}, index = -1) => {
    if(index >= 0){
      const {todoList: list} = this.state;
      list.splice(index,1,todo);
      this.setState({
        todoList: list,
        todoEditingId: ''
      })
    }
  }
  
  markCompleted = (id = '') => {
    const {todoList} = this.state;
    const updatedList = todoList.map(
      todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}) : todo
    );
    this.setState({
      todoList: updatedList,
      isCheckedAll: !isNotCheckedAll(updatedList)
    })
  }

  checkAllTodos = () => {
    const {todoList, isCheckedAll} = this.state;
    this.setState({
      todoList: todoList.map(todo => ({...todo,isCompleted: !isCheckedAll})),
      isCheckedAll: !isCheckedAll
    })
  }

  setStatusFilter = (status = '') => {
    this.setState({
      status: status
    })
  }

  clearCompleted = () => {
    const {todoList} = this.state;
    this.setState({
      todoList: filterByStatus(todoList, 'ACTIVE')
    })
  }

  removeTodo = (id = '') => {
    const {todoList} = this.state;
    this.setState({
      todoList: filterByStatus(todoList, 'REMOVE', id)
    })
  }
  render(){
    console.log(this.state.isCheckedAll)
    const {todoList,newItem,todoEditingId,isCheckedAll, status} = this.state;
    return (
      <div className="todoapp">
        <Header   
          onChange={(event)=>this.onChange(event)}
          onAddTodo={(event)=>this.onAddTodo(event)}
          newItem = {newItem}
        />
        <TodoList   
          todoList={filterByStatus(todoList,status)}
          getTodoEditingId={(id)=>this.getTodoEditingId(id)}
          todoEditingId={todoEditingId}
          onEditTodo={this.onEditTodo}
          markCompleted={this.markCompleted}
          isCheckedAll={isCheckedAll}
          checkAllTodos={this.checkAllTodos}
          setStatusFilter={this.setStatusFilter}
          removeTodo = {this.removeTodo}
        />
        <Footer 
          setStatusFilter={this.setStatusFilter}
          status = {status}
          clearCompleted={this.clearCompleted}
          numOfTodos={todoList.length}
          numOfTodosLeft={filterByStatus(todoList,'ACTIVE').length}
        />
      </div>
    );
  }
}

export default App;
