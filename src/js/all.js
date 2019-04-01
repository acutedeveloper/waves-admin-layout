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
                console.log(e.target.closest(`.${this.activateButtonClass}`));
                if (e.target.closest(`.${this.activateButtonClass}`) === null) {
                    this.removeCssClass();
                }
            }.bind(this));
        }

    }

    toggleCssClass() {
        console.log(this.targetElement.classList);
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
//
// const sidebarConfig = {
//     activateButton: "js-sidebar-menu-toggle",
//     targetElement: "js-sidebar-menu-list",
//     disableButton: "js-hide-sidebar-menu",
//     cssToggleClass: "js-show-sidebar-menu",
//     windowClickDisable: true
// };
//
// const sidebarMenu = new ToggleMyElement(sidebarConfig);

/**
 *
 * Accordion
 *
 * Simple functionality to reveal related content.
 *
 * A parent wrapper div is needed to capture the clicks on multiple accordion items
 *
 * <div class="js-accordion-parent">
 *     <div class="js-accordion-toggle">
 *         Title Of toggle
 *     </div>
 *     <div class="js-accordion-content">
 *         ...
 *     </div>
 * </div>
 *
 * const config = {
 *    accordionParent: "js-accordion-parent",
 *    accordionToggle: "js-accordion-toggle",
 *    accordionContent: "js-accordion-content",
 *    cssToggleClass: "js-accordion-show"
 * }
 *
 */



class ToggleAccordion {

    constructor(configObject) {

        // Get values from the configObject
        this.accordionParentClass = configObject.accordionParent;
        this.accordionToggleClass = configObject.accordionToggle;
        this.accordionContentClass = configObject.accordionContent;
        this.cssToggleClass = configObject.cssToggleClass;

        // Get Parent Accordion from the DOM
        this.accordionParent = document.querySelector(`.${this.accordionParentClass}`);

        if (this.accordionParent !== null) {
            this.setEvents();
        } else {
            console.error("Please define a parent accordion block");
        }

    }

    setEvents() {

        this.accordionParent.addEventListener('click', function(e) {
            console.log("Accord");
            if(e.target.classList.contains(this.accordionToggleClass)) {
                this.toggleAccordionContent(e.target);
            }

            e.stopPropagation();
        }.bind(this));

    }

    toggleAccordionContent(accordionToggle) {
        // Get the nearest accordion content-block
        accordionToggle.nextElementSibling.classList.toggle(this.cssToggleClass);
    }

}

const footerAccordionConfig = {
    accordionParent: "js-accordion-parent",
    accordionToggle: "js-accordion-toggle",
    accordionContent: "js-accordion-content",
    cssToggleClass: "js-accordion-show"
};

const footerAccordion = new ToggleAccordion(footerAccordionConfig);


/**
 * ChartJS
 */

var ctx = document.getElementById('dailySales').getContext('2d');
var myChart = new Chart(ctx, {
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
});
Chart.defaults.global.defaultFontFamily = "Montserrat--regular, helvetica neue";
Chart.defaults.global.defaultFontSize = 10;
// Chart.gridLines.drawTicks = false;
