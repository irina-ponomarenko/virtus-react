import React from 'react';
import './Home.css';
import Calendar from 'react-calendar';
import BoxWrapper from '../atoms/BoxWrapper';
import ReactHighcharts from 'react-highcharts';
import AreaChart from '../../../config/AreaChart.config';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ListUser from './ListUser';
import ListInBox from './ListInBox';
import SelectCharts from '../atoms/SelectSort';
import BarChart from './BarChart';

class Settings extends React.Component {

    render(){
        return(
           <div className="WrapperAllPage">
               <div className="WrapperBlock MarginBottom">
                   <h2>Settings</h2>
               </div>
            </div>
        );
    }
}
export default Settings;