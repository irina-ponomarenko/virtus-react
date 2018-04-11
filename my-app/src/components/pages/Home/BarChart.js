import React from 'react';
import { Bar } from 'react-chartjs-2';

const chart1 = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{
        label: 'Team points',
        data: [503, 385, 270, 133, 65, 343, 105, 400, 310, 25, 176, 345],
        backgroundColor: [
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0',
            '#E0E0E0'
        ]
    }]
};
const chart2 = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{
        label: 'Team points 2',
        data: [303, 185, 470, 313, 65, 450, 340, 123, 234, 200, 178, 45],
        backgroundColor: [
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC',
            '#4DB6AC'
        ]
    }]
};
const chart3 = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{
        label: 'Team points 3',
        data: [203, 105, 370, 213, 165, 150, 320, 223, 434, 110, 378, 145],
        backgroundColor: [
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
            '#7986CB',
        ]
    }]
};


const Button = (props) => (
    <button id="update-chart" onClick={props.handleOnClick}>Years</button>
);
const Button2 = (props) => (
    <button id="update-chart2" onClick={props.handleOnClick}>Month</button>
);
const Button3 = (props) => (
    <button id="update-chart3" onClick={props.handleOnClick}>Week</button>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: chart1,chart2,chart3,
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleUpdate2 = this.handleUpdate2.bind(this);
        this.handleUpdate3 = this.handleUpdate3.bind(this);
    }

    handleUpdate() {
        const chartData  = chart1;

        this.setState({chartData});
    }
    handleUpdate2() {
        const chartData = chart2;
        this.setState({chartData});
    }
    handleUpdate3() {
        const chartData = chart3;
        this.setState({chartData});
    }

    render() {
        return(
            <div>
                <Bar data={this.state.chartData} width={650} height={335} />
                <Button handleOnClick={this.handleUpdate} />
                <Button2 handleOnClick={this.handleUpdate2} />
                <Button3 handleOnClick={this.handleUpdate3} />
            </div>
        );
    }
}
export default App ;