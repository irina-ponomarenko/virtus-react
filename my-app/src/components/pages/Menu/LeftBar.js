import React from 'react';
import { NavLink } from 'react-router-dom';

class LeftBar extends React.Component {
    render () {
        const  listMenuLeft = [
            {
                Link: '/',
                className: 'fa fa-home',
                class: '',
                id: ''
            },
            {
                Link: '/all_project',
                className: 'fa fa-bars',
                class: '',
                id: ''
            },
            {
                Link: '/raport',
                className: 'fa fa-line-chart',
                class: '',
                id: ''
            },
            {
                Link: '/inbox',
                className: 'fa fa-envelope',
                class: 'NewMessage',
                id: 'NewMessage'
            },
            {
                Link: '/users',
                className: 'fa fa-users',
                class: '',
                id: ''
            }
        ];

        let updateTime = function(){
            document.getElementById("NewMessage").style.display = "block"
        };
        setTimeout(updateTime, 7000);

        return (
            <div>
                <div className="LeftBar">
                    <ul>
                        {listMenuLeft.map((item, index) =>
                            <li key={index}>
                                <NavLink
                                    exact to={item.Link}
                                    activeClassName="activeNav">
                                    <i className={item.className}></i>
                                    <i className={item.class} id={item.id}></i>
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
export  default  LeftBar;