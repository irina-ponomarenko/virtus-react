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
                Link: '/all_project',
                className: 'fa fa-bars',
            },
            {
                Link: '/raport',
                className: 'fa fa-line-chart',
            },
            {
                Link: '/inbox',
                className: 'fa fa-envelope',
            },
            {
                Link: '/users',
                className: 'fa fa-users'
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
                                </NavLink>
                            </li>
                        )}
                    </ul>
                    <div className="NewMessage" id="NewMessage">
                    </div>
                </div>
            </div>
        )
    }
}
export  default  LeftBar;