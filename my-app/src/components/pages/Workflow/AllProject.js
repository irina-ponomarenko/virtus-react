import React from 'react';
import HeaderProject from './HeaderProject';
import ProjectLists from './ProjectLists';

class AllProject extends React.Component{
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
export default AllProject;
