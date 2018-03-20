import React from 'react';
import { NavLink } from 'react-router-dom';

class LeftBar extends React.Component {
    render () {
        const  listMenuLeft = [
            {
                Link: '/',
                className: 'fa fa-home',
            },
            {
                Link: '/Workflow',
                className: 'fa fa-bars',
            },
            {
                Link: '/Projects',
                className: 'fa fa-line-chart',
            },
            {
                Link: '/Raport',
                className: 'fa fa-envelope',
            },
            {
                Link: '/Inbox',
                className: 'fa fa-users'
            }
        ];
        return (
            <div className="LeftBar">
                <ul>
                    {listMenuLeft.map((item, index) =>
                        <li key={index}>
                            <NavLink
                                exact to={item.Link}
                                activeClassName="activeNav">
                                <i className={item.className}></i>
                            </NavLink>
                        </li>
                    )};
                </ul>
            </div>
        )
    }
}
export  default  LeftBar;