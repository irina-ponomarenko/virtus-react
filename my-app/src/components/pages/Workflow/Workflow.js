import React from 'react';
import './Workflow.css';
import HeaderProject from './HeaderProject';
import ProjectUserList from './ProjectUserList';

class Workflow extends React.Component{
    render(){
        return(
            <div className="WrapperProject">
                <HeaderProject/>
                <ProjectUserList/>
            </div>
        );
    }
}
export  default Workflow;