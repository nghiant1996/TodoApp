import React, { Component } from 'react';

class Header extends Component {
    render(){
        const {newItem, onChange, onAddTodo} = this.props;

        return(
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" 
                       onChange={onChange}
                       onKeyPress={onAddTodo}
                       value={newItem}
                />
            </header>
        )
    }
}

export default Header;