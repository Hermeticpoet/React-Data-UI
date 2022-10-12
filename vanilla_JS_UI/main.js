// Chart Options
const options = {
    chart: {
        width: '100%',
        height: 450,
        type: 'bar',
        background: '#f4f4f4',
        foreColor: '#333'
    },
    series: [{
        name: 'Population',
        data: [8550405, 3871883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928, 1300092, 1026908]
    }],
    xaxis: {
        categories: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'San Diego', 'Dallas', 'San Jose']
    },
    plotOptions: {
        bar: {
            horizontal: false // Vertical
        }
    },
    fill: {
        colors: ['#7c44cf']
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Largest US Cities by Population',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: '25'
        }
    }
};

// Init Chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render Chart
chart.render();

// Method Event example
document.querySelector('#btn-horiz').addEventListener('click', () => {
    chart.updateOptions({
        plotOptions: {
            bar: {
                horizontal: true // Horizontal
            }
        }
    });
});

document.querySelector('#btn-vert').addEventListener('click', () => {
    chart.updateOptions({
        plotOptions: {
            bar: {
                horizontal: false // Vertical
            }
        }
    });
});