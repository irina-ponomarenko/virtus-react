import React from 'react';
import { NavLink } from 'react-router-dom';
import TopMenu from '../Menu/TopMenu';

class LeftBar extends React.Component {
    render () {
        const  listMenuLeft = [
            {
                Link: '/',
                className: 'fa fa-home',
            },
            {
                Link: '/workflow',
                className: 'fa fa-bars',
            },
            {
                Link: '/projects',
                className: 'fa fa-line-chart',
            },
            {
                Link: '/raport',
                className: 'fa fa-envelope',
            },
            {
                Link: '/inbox',
                className: 'fa fa-users'
            }
        ];
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