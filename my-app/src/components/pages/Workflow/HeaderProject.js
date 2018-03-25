import React from 'react';
import Select from './Select';
import { Link } from 'react-router-dom';

class HeaderProject extends React.Component{
    render(){
        const forPagesSelect = ["All","last month","last week"];
        return(
            <header className="PageHeader">
                <div className="TitleHeader">
                    <Link to="/all_project">
                        <h2>All Projects (358)</h2>
                    </Link>
                    <Link to="/workflow">
                        <h2>Workflow</h2>
                    </Link>
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