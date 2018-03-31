import React from 'react';
import './Workflow.css';
import HeaderProject from './HeaderProject';
import ProjectUserList from './ProjectUserList';

class Workflow extends React.Component{
    render(){
        const forPagesSelect = [
            "Microsoft",
            "Google",
            "Symu.co",
            "JCD.pl",
            "Facebook",
            "Themeforest"
        ];

        return(
            <div className="WrapperProject">
                <HeaderProject
                    typePage="Workflow"
                    selectOptions={forPagesSelect} />
                <ProjectUserList/>
            </div>
        );
    }
}
export  default Workflow;