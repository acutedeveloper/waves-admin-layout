const options = {
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            display: false, // Removes the axix on the right hand side - thus removing the padding also
        }],
        yAxes: [{
            display: false, // Removes the axix on the right hand side - thus removing the padding also
            ticks: {
                min: 13,
                max: 19
            },
        }]
    },
    layout: {
        padding: {
            bottom: -100
        }
    },
    responsive: true,
    maintainAspectRatio: false
};

new Chart('line-chart__new-customers', {
    type: 'line',
    data: {
        // You need labels for each set of data
        labels: [, , , , ,,],
        datasets: [{
            label: '# of Votes',
            data: [17, 19, 18, 15, 17, 13],
            backgroundColor: 'rgba(255, 255, 132, 0.0)',
            borderColor: 'rgba(0, 197, 220, 1)',
            borderWidth: 3,
            pointRadius: 0,
            lineTension: 0.5
        }]
    },
    options: options
});

new Chart('line-chart__active-users', {
    type: 'line',
    data: {
        // You need labels for each set of data
        labels: [, , , , ,,],
        datasets: [{
            label: '# of Votes',
            data: [13, 14, 15, 16, 17, 19],
            backgroundColor: 'rgba(255, 255, 132, 0.0)',
            borderColor: 'rgba(87, 103, 195, 1)',
            borderWidth: 3,
            pointRadius: 0,
            lineTension: 0.5
        }]
    },
    options: options
});

new Chart('line-chart__sales', {
    type: 'line',
    data: {
        // You need labels for each set of data
        labels: [, , , , ,,],
        datasets: [{
            label: '# of Votes',
            data: [13, 14, 15, 16, 17, 19],
            backgroundColor: 'rgba(255, 255, 132, 0.0)',
            borderColor: 'rgba(255, 184, 34, 1)',
            borderWidth: 3,
            pointRadius: 0,
            lineTension: 0.5
        }]
    },
    options: options
});
