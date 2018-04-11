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
import SelectCharts from '../atoms/SelectCharts';
import BarChart from './BarChart';

class Home extends React.Component {
    state = {
        date: new Date(),
    };
    onChange = date =>
        this.setState({ date });


    render(){
        const forChartsSelect =['Year', 'Month', 'Week'];

        return(
           <div className="WrapperAllPage">
               <div className="WrapperBlock MarginBottom">
                   <BoxWrapper>
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
                       <ReactHighcharts config={AreaChart}></ReactHighcharts>
                   </BoxWrapper>
                   <ListUser/>
               </div>
               <div className="WrapperBlock MarginBottom">
                   <BoxWrapper className="PaddingNone">
                       <div className="HeaderBarChart">
                           <h2>Sales report</h2>
                           <div className="WrapperSortSelect MarginNone">
                               <h2>Show:</h2>
                               <SelectCharts data={forChartsSelect} className="SelectPage HeaderSelectCharts"/>
                           </div>
                       </div>
                       <BarChart/>
                   </BoxWrapper>
                   <ListInBox/>
                   <div className="Container ContainerHeight">
                       <Calendar
                           onChange={this.onChange}
                           value={this.state.date}
                       />
                   </div>
               </div>
            </div>
        );
    }
}
export default Home;