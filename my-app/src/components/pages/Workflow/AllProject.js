import React from 'react';
import HeaderProject from './HeaderProject';
import ProjectLists from './ProjectLists';

class AllProject extends React.Component{
    render(){
        return(
            <div className="WrapperProject">
                <HeaderProject/>
                <ProjectLists/>
            </div>
        );
    }
}
export default AllProject;
