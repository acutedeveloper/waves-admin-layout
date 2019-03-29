/**
 *
 * Toggle My Element
 *
 * Simple funtionality to trigger simple interactions on the DOM.
 *
 * Provide the class of the click action element
 * Provide the class of the element that will be triggered
 * When your class is triggered, use CSS to provide the action
 *
 * const config = {
 *  activateButton: "js-button",
 *  targetElement: "js-target",
 *  disableButton: "",
 *  cssToggleClass: "js-style",
 *  windowClickDisable: false
 *  }
 *
 */

class ToggleMyElement {

    constructor(configObject) {

        // Get values from the configObject
        this.activateButtonClass = configObject.activateButton;
        this.disableButtonClass = configObject.disableButton;
        this.targetElementClass = configObject.targetElement;
        this.cssToggleClass = configObject.cssToggleClass;
        this.windowClickDisable = configObject.windowClickDisable || false;

        // Get elements from the DOM
        this.activateButton = document.querySelector(`.${this.activateButtonClass}`);
        this.targetElement = document.querySelector(`.${this.targetElementClass}`);

        if(this.disableButtonClass !== "") {
            this.disableButtonClass = document.querySelector(`.${this.disableButtonClass}`);
        }

        if (this.activateButton !== null || this.targetElement !== null) {
            this.setEvents();
        } else {
            console.error("You have not added a class to the element");
        }

    }

    setEvents() {

        this.activateButton.addEventListener('click', function(e) {
            e.preventDefault();
            this.toggleCssClass();
        }.bind(this));

        if (this.windowClickDisable) {
            window.addEventListener('click', function(e) {
                e.preventDefault();
                if (!e.target.classList.contains(this.activateButtonClass)) {
                    this.removeCssClass();
                }
            }.bind(this));
        }

    }

    toggleCssClass() {
        this.targetElement.classList.toggle(this.cssToggleClass);
    }

    removeCssClass() {
        this.targetElement.classList.remove(this.cssToggleClass);
    }
}

// Use this config object to target the elements needed
const menuConfig = {
    activateButton: "js-menu-toggle",
    targetElement: "js-menu-list",
    disableButton: "",
    cssToggleClass: "js-show-menu",
    windowClickDisable: true
};

const headerMenu = new ToggleMyElement(menuConfig);


var ctx = document.getElementById('dailySales').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [,,,,,,,,,,,,,,,,],
        datasets: [{
            label: '# of Votes',
            data: [220, 220, 100, 50, 180, 170, 420, 220, 100, 50, 180, 170, 180, 170, 420, 220, 100],
            backgroundColor: [
                'rgba(87, 103, 195, 1)'
            ],
            borderWidth: 0
        },{
            label: '# of Votes',
            data: [40, 220, 100, 50, 180, 170, 420, 220, 100, 50, 180, 170, 180, 170, 420, 220, 100],
            backgroundColor: [
                'rgba(3, 197, 220, 1)'
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
        tooltips: {
            enabled: false
        },
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
                    }
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
});
Chart.defaults.global.defaultFontFamily = "Montserrat--regular, helvetica neue";
Chart.defaults.global.defaultFontSize = 10;
// Chart.gridLines.drawTicks = false;


// Donut Chart
var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                24,
                28,
                48,
            ],
            backgroundColor: [
                'red',
                'orange',
                'yellow',
            ],
            label:'Dataset 1'
        }],
        labels: [
            'Men',
            'Women',
            'Accessories'
        ]
    },
    options: {
        responsive: true,
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

window.onload = function() {
    var ctx = document.getElementById('mainCategories').getContext('2d');
    window.myDoughnut = new Chart(ctx, config);
};

