import React from 'react';
import Select from '../atoms/Select';
import { NavLink } from 'react-router-dom';

class HeaderProject extends React.Component{
    render(){
        const forPagesSelect = ["All","last month","last week"];
        return(
            <header className="PageHeader">
                <div className="TitleHeader">
                    <NavLink exact to="/all_project" activeClassName="activeLink">
                        <h2>All Projects (358)</h2>
                    </NavLink>
                    <NavLink exact to="/workflow" activeClassName="activeLink">
                        <h2>Workflow</h2>
                    </NavLink>
                </div>
                <div className="ButtonHeader">
                    <h2>Show projects:</h2>
                    <Select data={forPagesSelect}/>
                </div>
            </header>
        );
    }
}
export  default HeaderProject;