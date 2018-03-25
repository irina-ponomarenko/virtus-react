import React from 'react';
import HeaderProject from './HeaderProject';

class AllProject extends React.Component{
    render(){
        return(
            <div className="WrapperProject">
                <div className="WrapperBlock MarginBlock ProjectBlock">
                    <HeaderProject/>
                </div>
            </div>
        );
    }
}
export default AllProject;
