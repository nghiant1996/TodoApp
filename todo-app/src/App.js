import React from 'react';
import './App.css';
import './css/Todo.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
