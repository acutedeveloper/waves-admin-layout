const dailySalesChart = (function(){

    /**
     * ChartJS
     */

    const config = {
        type: 'bar',
        data: {
            labels: ["Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning","Morning",],
            datasets: [{
                label: '# of Sales',
                data: [210, 110, 50, 25, 90, 85, 210, 110, 50, 25, 90, 65, 90, 60, 210, 110, 50],
                backgroundColor: [
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                    'rgba(87, 103, 195, 1)',
                ],
                borderWidth: 0
            },{
                label: '# of Sales',
                data: [220, 100, 40, 30, 85, 90, 190, 90, 55, 65, 80, 50, 80, 50, 220, 120, 70],
                backgroundColor: [
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                    'rgba(3, 197, 220, 1)',
                ],
                borderWidth: 0
            }],
        },
        scale: {
            display: false
        },
        options: {
            legend: {
                display: false,
            },
            labels: {
                defaultFontFamily: "Impact, Haettenschweiler",
            },
            // tooltips: {
            //     enabled: false
            // },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    gridLines: { drawTicks: false },
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            var result = (value / 100) % 1 === 0;
                            if (result) {
                                return value;
                            }
                        },
                        min: 0,
                        max: 500
                    },
                    stacked: true
                }],
                xAxes: [{
                    display: false, // Removes the axix on the right hand side - thus removing the padding also
                    barPercentage: 0.5,
                    stacked: true
                }],
                pointLabels :{
                    fontStyle: "bold",
                }
            },
            layout: {
                padding: {
                    // left: 0,
                    // right: 0,
                    // top: 0,
                    bottom: -100
                }
            }
        }
    };

    const ctx = document.getElementById('dailySales').getContext('2d');
    let barChart = new Chart(ctx, config);

    Chart.defaults.global.defaultFontFamily = "Montserrat--regular, helvetica neue";
    Chart.defaults.global.defaultFontSize = 10;

    function redrawChart() {
        barChart.destroy();
        barChart = new Chart(ctx, config);
    }

    return {
        redrawChart: redrawChart
    };

})();