"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var ToggleMyElement =
/*#__PURE__*/
function () {
  function ToggleMyElement(configObject) {
    _classCallCheck(this, ToggleMyElement);

    // Get values from the configObject
    this.activateButtonClass = configObject.activateButton;
    this.disableButtonClass = configObject.disableButton;
    this.targetElementClass = configObject.targetElement;
    this.cssToggleClass = configObject.cssToggleClass;
    this.windowClickDisable = configObject.windowClickDisable || false; // Get elements from the DOM

    this.activateButton = document.querySelector(".".concat(this.activateButtonClass));
    this.targetElement = document.querySelector(".".concat(this.targetElementClass));

    if (this.disableButtonClass !== "") {
      this.disableButtonClass = document.querySelector(".".concat(this.disableButtonClass));
    }

    if (this.activateButton !== null || this.targetElement !== null) {
      this.setEvents();
    } else {
      console.error("You have not added a class to the element");
    }
  }

  _createClass(ToggleMyElement, [{
    key: "setEvents",
    value: function setEvents() {
      this.activateButton.addEventListener('click', function (e) {
        e.preventDefault();
        this.toggleCssClass();
      }.bind(this));

      if (this.windowClickDisable) {
        window.addEventListener('click', function (e) {
          e.preventDefault();
          console.log(e.target.closest(".".concat(this.activateButtonClass)));

          if (e.target.closest(".".concat(this.activateButtonClass)) === null) {
            this.removeCssClass();
          }
        }.bind(this));
      }
    }
  }, {
    key: "toggleCssClass",
    value: function toggleCssClass() {
      console.log(this.targetElement.classList);
      this.targetElement.classList.toggle(this.cssToggleClass);
    }
  }, {
    key: "removeCssClass",
    value: function removeCssClass() {
      this.targetElement.classList.remove(this.cssToggleClass);
    }
  }]);

  return ToggleMyElement;
}(); // Use this config object to target the elements needed


var menuConfig = {
  activateButton: "js-menu-toggle",
  targetElement: "js-menu-list",
  disableButton: "",
  cssToggleClass: "js-show-menu",
  windowClickDisable: true
};
var headerMenu = new ToggleMyElement(menuConfig); //
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

var ToggleAccordion =
/*#__PURE__*/
function () {
  function ToggleAccordion(configObject) {
    _classCallCheck(this, ToggleAccordion);

    // Get values from the configObject
    this.accordionParentClass = configObject.accordionParent;
    this.accordionToggleClass = configObject.accordionToggle;
    this.accordionContentClass = configObject.accordionContent;
    this.cssToggleClass = configObject.cssToggleClass; // Get Parent Accordion from the DOM

    this.accordionParent = document.querySelector(".".concat(this.accordionParentClass));

    if (this.accordionParent !== null) {
      this.setEvents();
    } else {
      console.error("Please define a parent accordion block");
    }
  }

  _createClass(ToggleAccordion, [{
    key: "setEvents",
    value: function setEvents() {
      this.accordionParent.addEventListener('click', function (e) {
        console.log("Accord");

        if (e.target.classList.contains(this.accordionToggleClass)) {
          this.toggleAccordionContent(e.target);
        }

        e.stopPropagation();
      }.bind(this));
    }
  }, {
    key: "toggleAccordionContent",
    value: function toggleAccordionContent(accordionToggle) {
      // Get the nearest accordion content-block
      accordionToggle.nextElementSibling.classList.toggle(this.cssToggleClass);
    }
  }]);

  return ToggleAccordion;
}();

var footerAccordionConfig = {
  accordionParent: "js-accordion-parent",
  accordionToggle: "js-accordion-toggle",
  accordionContent: "js-accordion-content",
  cssToggleClass: "js-accordion-show"
};
var footerAccordion = new ToggleAccordion(footerAccordionConfig);
/**
 * ChartJS
 */

var ctx = document.getElementById('dailySales').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [,,,,,,,,,,,,,,,,],
    datasets: [{
      label: '# of Votes',
      data: [220, 220, 100, 50, 180, 170, 420, 220, 100, 50, 180, 170, 180, 170, 420, 220, 100],
      backgroundColor: ['rgba(87, 103, 195, 1)'],
      borderWidth: 0
    }, {
      label: '# of Votes',
      data: [40, 220, 100, 50, 180, 170, 420, 220, 100, 50, 180, 170, 180, 170, 420, 220, 100],
      backgroundColor: ['rgba(3, 197, 220, 1)'],
      borderWidth: 0
    }]
  },
  scale: {
    display: false
  },
  options: {
    legend: {
      display: false
    },
    labels: {
      defaultFontFamily: "Impact, Haettenschweiler"
    },
    tooltips: {
      enabled: false
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          drawTicks: false
        },
        ticks: {
          beginAtZero: true,
          callback: function callback(value, index, values) {
            var result = value / 100 % 1 === 0;

            if (result) {
              return value;
            }
          }
        },
        stacked: true
      }],
      xAxes: [{
        display: false,
        // Removes the axix on the right hand side - thus removing the padding also
        barPercentage: 0.5,
        stacked: true
      }],
      pointLabels: {
        fontStyle: "bold"
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
Chart.defaults.global.defaultFontSize = 10; // Chart.gridLines.drawTicks = false;
// Donut Chart

var config = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [24, 28, 48],
      backgroundColor: ['red', 'orange', 'yellow'],
      label: 'Dataset 1'
    }],
    labels: ['Men', 'Women', 'Accessories']
  },
  options: {
    responsive: true,
    legend: {
      position: 'right'
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

window.onload = function () {
  var ctx = document.getElementById('mainCategories').getContext('2d');
  window.myDoughnut = new Chart(ctx, config);
};
//# sourceMappingURL=all.js.map
