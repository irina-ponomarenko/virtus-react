import React from 'react';

class ProjectUserList extends  React.Component{
    render(){
        return(
            <div className="AllProject">
                <table className="ProjectUserList">
                    <thead>
                    <tr>
                        <th>Project title</th>
                        <th>Value</th>
                        <th>Deadline</th>
                        <th>Time spent</th>
                        <th>Progress</th>
                        <th>Status</th>
                        <th>Assigned to</th>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}
export default ProjectUserList;