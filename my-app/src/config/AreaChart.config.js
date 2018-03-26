const Highcharts = {
    chart: {
        type: 'areaspline',
        backgroundColor: 'transparent',
    },
    title: {
        text: ' '
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
        ],
        minorGridLineWidth: 0,
        gridLineWidth: 1,
        alternateGridColor: null,
        series: {
            labels: false
        },
    },
    yAxis: {
        title: {
            text: ' '
        },
        labels: {
            enabled: false
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
    },
    tooltip: {
        shared: true,
        valueSuffix: ' units'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0,
        },
        series: {
            allowPointSelect: true
        },
        marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
                hover: {
                    enabled: true
                }
            }
        }
    },
    series: [{
        name: 'John',
        data: [3, 4, 3, 5, 4, 10, 12],
    }]
};

export default Highcharts;