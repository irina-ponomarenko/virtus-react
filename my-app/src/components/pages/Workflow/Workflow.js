import React from 'react';
import './Workflow.css';
import Select from './Select';
import ProjectLists from './ProjectLists';

class Workflow extends React.Component{
    render(){
        const forPagesSelect = ["All","last month","last week"];
        return(
            <div className="WrapperPage">
                <div className="WrapperBlock MarginBlock ProjectBlock">
                    <header className="PageHeader">
                        <div className="TitleHeader">
                            <h2>All Projects (358)</h2>
                            <h2>Workflow</h2>
                        </div>
                        <div className="ButtonHeader">
                            <h2>Show projects:</h2>
                            <Select data={forPagesSelect}/>
                        </div>
                    </header>
                    <ProjectLists/>
                </div>
            </div>
        );
    }
}
export  default Workflow;