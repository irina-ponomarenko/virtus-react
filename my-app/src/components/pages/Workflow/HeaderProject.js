import React from 'react';
import Select from '../atoms/Select';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class HeaderProject extends React.Component{
    render(){
        return(
            <header className="PageHeader">
                <div className="TitleHeader">
                    <NavLink exact to="/all_project" activeClassName="activeLink">
                        <h2>All Projects ({this.props.sumProject})</h2>
                    </NavLink>
                    <NavLink exact to="/workflow" activeClassName="activeLink">
                        <h2>Workflow</h2>
                    </NavLink>
                </div>
                <div className="ButtonHeader">
                    <h2>Show projects:</h2>
                    <Select data={this.props.selectOptions}/>
                </div>
            </header>
        );
    }
}
const mapState = (state, props) => {
    return {
        sumProject: state.sumProject
    }
};
export  default connect (mapState) (HeaderProject);