import React from 'react';
import HeaderProject from './HeaderProject';
import ProjectLists from './ProjectLists';

class AllProject extends React.Component{
    render(){
        const forPagesSelect = ["All","last month","last week"];
        return(
            <div className="WrapperProject">
                <HeaderProject
                    typePage="AllProjects"
                    selectOptions={forPagesSelect}/>
                <ProjectLists/>
            </div>
        );
    }
}

export default AllProject;
