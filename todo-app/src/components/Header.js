import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo"/>
            </header>
        )
    }
}

export default Header;