import React, { Component } from 'react';

class Footer extends Component {
    render(){
        const {status, setStatusFilter, clearCompleted, numOfTodos, numOfTodosLeft} = this.props;
        const filterBtns = [
            {
                title: 'All',
                isActived: status === 'ALL',
                onClick: ()=> setStatusFilter('ALL'),
                link: ''
            },
            {
                title: 'Active',
                isActived: status === 'ACTIVE',
                onClick: ()=> setStatusFilter('ACTIVE'),
                link: ''
            },
            {
                title: 'Completed',
                isActived: status === 'COMPLETED',
                onClick: ()=> setStatusFilter('COMPLETED'),
                link: ''
            }
        ]
        return(
            <footer className="footer">
                <span className="todo-count">
                    <strong>{numOfTodosLeft}</strong>
                    <span> </span>
                    <span>{`${numOfTodosLeft > 1 ? 'items' : 'item'}`}</span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    {
                        filterBtns.map(btn => (
                            <FilterBtn key={`btn${btn.title}`} {...btn}/>
                        ))
                    }
                </ul>
                {(numOfTodos > numOfTodosLeft) && <button 
                                                        className="clear-completed"
                                                        onClick={clearCompleted}
                                                  >Clear completed</button>}
            </footer>
        )
    }
}

const FilterBtn = (props) => {
    const {title, isActived, onClick, link} = props;
    return(
         <>
            <li>
                <a
                    href={`#/${link}`}
                    className={`${isActived ? 'selected': ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
            <span></span>
         </>
    )
}
export default Footer;