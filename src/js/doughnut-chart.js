const mainCategoriesChart = (function(){

    const chartData = {
        // You need labels for each set of data
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [17, 193, 81],
            backgroundColor: [
                'rgba(0, 197, 220, 1)',
                'rgba(87, 103, 195, 1)',
                'rgba(255, 184, 34, 1)'
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 3,
        }]
    };

    // Donut Chart
    var config = {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 70,
            legend: {
                position: 'right',
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Doughnut Chart'
            // },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    const donughtChartCanvas = document.getElementById('mainCategories').getContext('2d');
    let donughtChart = new Chart(donughtChartCanvas, config);

    function redrawChart() {
        donughtChart.destroy();
        donughtChart = new Chart(donughtChartCanvas, config);
    }

    return {
        redrawChart: redrawChart
    };

})();
