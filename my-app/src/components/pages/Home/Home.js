import React from 'react';
import './Home.css';
import Calendar from 'react-calendar';
import BoxWrapper from '../atoms/BoxWrapper';
import ReactHighcharts from 'react-highcharts';
import AreaChart from '../../../config/AreaChart.config';
import HightchartsColumn from '../../../config/ColumnChart.config';
import ListUser from './ListUser';
import ListInBox from './ListInBox';

class Home extends React.Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })
    render(){
        return(
           <div className="WrapperAllPage">
               <div className="WrapperBlock MarginBottom">
                   <BoxWrapper>
                       <ReactHighcharts config={AreaChart}></ReactHighcharts>
                   </BoxWrapper>
                   <ListUser/>
               </div>
               <div className="WrapperBlock MarginBottom">
                   <BoxWrapper className="PaddingNone">
                       <ReactHighcharts config={HightchartsColumn}></ReactHighcharts>
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