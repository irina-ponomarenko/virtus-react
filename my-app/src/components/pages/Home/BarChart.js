import React from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';

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


class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: chart1
        };
    }

    handleUpdate(e) {
        this.setState({
            chartData: e.target.value
        });
    }
    render() {
        let chartSort;
        if (this.props.status === 'Year'){
            chartSort = chart1;
        }
        else   if (this.props.status === 'Month'){
            chartSort = chart2;
        }
        else   if (this.props.status === 'Week'){
            chartSort = chart3;
        }
        return(
            <Bar data={chartSort} width={650} height={335} />
        );
    }
}
const mapState = (state, props) => {
    return {
        status: state.status
    }
};
export default connect (mapState) (BarChart) ;