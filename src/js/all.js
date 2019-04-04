const wavesAdmindebounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Create the listener function
var updateLayout = wavesAdmindebounce(function(e) {

    // Does all the layout updating here
    dailySalesChart.redrawChart();
    mainCategoriesChart.redrawChart();
    lineCharts.redrawChart();

}, 500); // Maximum run of once per 500 milliseconds

// Add the event listener
window.addEventListener("resize", updateLayout, false);

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
        this.dispatchEventName = configObject.dispatchEventName || "toggleMyElement";

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

        console.log("setEvents:", this.dispatchEventName);

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
        this.sendEventNotice("class-toggled");
    }

    removeCssClass() {
        this.targetElement.classList.remove(this.cssToggleClass);
        this.sendEventNotice("class-removed");
    }

    sendEventNotice(eventAction) {
        var event = new CustomEvent(this.dispatchEventName, { "details": eventAction });
        document.dispatchEvent(event);
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

class SidebarToggle extends ToggleMyElement {

    constructor(config){

        super(config);
        this.setEvent();

        // Sub class element
        this.subClassElementClass = config.subClassElement;

        // Get elements from the DOM
        this.subClassElement = document.querySelector(`.${this.subClassElementClass}`);

    }

    setEvent(){

        document.addEventListener("moveMainContent", function(e){
            console.log(e);
            this.toggleElement();
        }.bind(this));

    }

    toggleElement() {
        this.subClassElement.classList.toggle("js-main-block-show");
    }

}

const sidebarConfig = {
    activateButton: "js-sidebar-toggle",
    targetElement: "js-sidebar",
    disableButton: "js-sidebar-hide",
    cssToggleClass: "js-sidebar-show",
    windowClickDisable: false,
    dispatchEventName: "moveMainContent",
    subClassElement: "js-main-block"
};

const sidebarMenu = new SidebarToggle(sidebarConfig);

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
