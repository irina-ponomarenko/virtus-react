import React from 'react';
import './Raport.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BoxWrapper from '../atoms/BoxWrapper';
import ReactHighcharts from 'react-highcharts';
import AreaChart from '../../../config/AreaChart.config';
import Select from '../atoms/Select';
import TableList from './TableList';
import { connect } from 'react-redux';

const chartYear = [{
    name: 'Dominic Lynton',
    data: [3, 2, 6, 3, 5, 8, 10],
    }];

const chartMonth =[{
    name: 'Dominic Lynton',
    data: [8, 4, 3, 5, 13, 10, 12],
}];
const chartWeek = [{
    name: 'Dominic Lynton',
    data: [1, 5, 3, 8, 4, 12, 10],
}];

AreaChart.series = chartYear;

class Raport extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData: chartYear
        };
    }
    handleUpdate(e) {
        this.setState({
            chartData: e.target.value
        });
    }
    render(){
        const forHeaderSelect = ["Week","Month","Year"];

        if (this.props.status === 'Year'){
            AreaChart.series = chartYear;
        }
        else  if (this.props.status === 'Month'){
            AreaChart.series = chartMonth;
        }
        else  if (this.props.status === 'Week'){
            AreaChart.series = chartWeek;
        }
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
const mapState = (state, props) => {
    return {
        status: state.status
    }
};
export default connect (mapState) (Raport);