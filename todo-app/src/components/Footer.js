import React, { Component } from 'react';

class Footer extends Component {
    render(){
        const filterBtns = [
            {
                title: 'All',
                isActived: true,
                onClick: ()=> {},
                link: ''
            },
            {
                title: 'Active',
                isActived: false,
                onClick: ()=> {},
                link: ''
            },
            {
                title: 'Completed',
                isActived: false,
                onClick: ()=> {},
                link: ''
            }
        ]
        return(
            <footer className="footer">
                <span className="todo-count">
                    <strong>1</strong>
                    <span> </span>
                    <span>item  </span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    {
                        filterBtns.map(btn => (
                            <FilterBtn {...btn}/>
                        ))
                    }
                </ul>
                <button className="clear-completed">Clear completed</button>
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