import React from 'react';
import './Workflow.css';
import HeaderProject from './HeaderProject';
import ProjectLists from './ProjectLists';

class Workflow extends React.Component{
    render(){
        return(
            <div className="WrapperProject">
                <div className="WrapperBlock MarginBlock ProjectBlock">
                    <HeaderProject/>
                    <ProjectLists/>
                </div>
            </div>
        );
    }
}
export  default Workflow;