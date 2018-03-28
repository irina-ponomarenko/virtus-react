import React from 'react';
import './Raport.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BoxWrapper from '../atoms/BoxWrapper';
import ReactHighcharts from 'react-highcharts';
import AreaChart from '../../../config/AreaChart.config';
import Select from '../atoms/Select';
import TableList from './TableList';

class Raport extends  React.Component{
    render(){
        const forHeaderSelect = ["Week","Month","Year"];
        return(
            <div className="WrapperBlock PositionBlock">
                <header className="HeaderGraph">
                    <div className="WrapperCircular">
                        <div className="CircularInfo">
                            <CircularProgressbar percentage={75} />
                            <div className="AboutCircular">
                                <h2>1 300</h2>
                                <p>VIEWS</p>
                            </div>
                        </div>
                        <div className="CircularInfo">
                            <CircularProgressbar percentage={35} />
                            <div className="AboutCircular">
                                <h2>800</h2>
                                <p>VISITORS</p>
                            </div>
                        </div>
                        <div className="CircularInfo">
                            <CircularProgressbar percentage={62} />
                            <div className="AboutCircular">
                                <h2>3 800</h2>
                                <p>IMPRESSIONS</p>
                            </div>
                        </div>
                    </div>
                    <div className="WrapperSortSelect">
                        <h2>Show:</h2>
                        <Select data={forHeaderSelect} className="HeaderSelect"/>
                    </div>
                </header>
                <BoxWrapper className="noBackground">
                    <ReactHighcharts config={AreaChart}></ReactHighcharts>
                </BoxWrapper>
                <TableList/>
            </div>
        );
    }
}
export  default Raport;