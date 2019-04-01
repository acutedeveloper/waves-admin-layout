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
        labels: [,,,,,,,,,,,,,],
        datasets: [{
            label: '# of Votes',
            data: [0,14,16,23,20,10,14,24,22,28,30,24,31],
            backgroundColor: 'rgba(255, 255, 132, 0.0)',
            borderColor: 'rgba(0, 197, 220, 1)',
            borderWidth: 3,
            pointRadius: 0,
            lineTension: 0.1
        }]
    },
    options: options
});

new Chart('line-chart__active-users', {
    type: 'line',
    data: {
        // You need labels for each set of data
        labels: [,,,,,,,,,,,,,,],
        datasets: [{
            label: '# of Votes',
            data: [6,12,16,19,16,14,16,19,19,23,24,25,26,28],
            backgroundColor: 'rgba(255, 255, 132, 0.0)',
            borderColor: 'rgba(87, 103, 195, 1)',
            borderWidth: 3,
            pointRadius: 0,
            lineTension: 0.1
        }]
    },
    options: options
});

new Chart('line-chart__sales', {
    type: 'line',
    data: {
        // You need labels for each set of data
        labels: [,,,,,,,,,,,,],
        datasets: [{
            label: '# of Votes',
            data: [20,15,18,18,11,17,18,19,23,18,19,16],
            backgroundColor: 'rgba(255, 255, 132, 0.0)',
            borderColor: 'rgba(255, 184, 34, 1)',
            borderWidth: 3,
            pointRadius: 0,
            lineTension: 0.1
        }]
    },
    options: options
});
