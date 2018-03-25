import React from 'react';
import './Workflow.css';
import HeaderProject from './HeaderProject';

class Workflow extends React.Component{
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
export  default Workflow;