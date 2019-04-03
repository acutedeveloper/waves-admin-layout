"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    console.log(configObject); // Get values from the configObject

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
          console.log('Set Events: Window Listener', e.target.closest(".".concat(this.activateButtonClass)));

          if (e.target.closest(".".concat(this.activateButtonClass)) === null) {
            this.removeCssClass();
          }
        }.bind(this));
      }
    }
  }, {
    key: "toggleCssClass",
    value: function toggleCssClass() {
      this.targetElement.classList.toggle(this.cssToggleClass); // this.sendEventNotice("class-toggled");
    }
  }, {
    key: "removeCssClass",
    value: function removeCssClass() {
      this.targetElement.classList.remove(this.cssToggleClass); // this.sendEventNotice("class-removed");
    }
  }, {
    key: "sendEventNotice",
    value: function sendEventNotice(eventAction) {
      var event = new CustomEvent("toggleMyElement", {
        "detail": eventAction
      });
      document.dispatchEvent(event);
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
var headerMenu = new ToggleMyElement(menuConfig);

var SidebarToggle =
/*#__PURE__*/
function (_ToggleMyElement) {
  _inherits(SidebarToggle, _ToggleMyElement);

  function SidebarToggle(configObject) {
    _classCallCheck(this, SidebarToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(SidebarToggle).call(this, configObject)); //this.setEvents();
  }

  _createClass(SidebarToggle, [{
    key: "setEvents",
    value: function setEvents() {
      document.addEventListener("toggleMyElement", function (e) {
        console.log(e);
      });
    }
  }]);

  return SidebarToggle;
}(ToggleMyElement);

var sidebarConfig = {
  activateButton: "js-sidebar-toggle",
  targetElement: "js-sidebar",
  disableButton: "js-sidebar-hide",
  cssToggleClass: "js-sidebar-show",
  windowClickDisable: false
};
var sidebarMenu = new SidebarToggle(sidebarConfig);
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
    labels: ["Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning", "Morning"],
    datasets: [{
      label: '# of Sales',
      data: [210, 110, 50, 25, 90, 85, 210, 110, 50, 25, 90, 65, 90, 60, 210, 110, 50],
      backgroundColor: ['rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)', 'rgba(87, 103, 195, 1)'],
      borderWidth: 0
    }, {
      label: '# of Sales',
      data: [220, 100, 40, 30, 85, 90, 190, 90, 55, 65, 80, 50, 80, 50, 220, 120, 70],
      backgroundColor: ['rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)', 'rgba(3, 197, 220, 1)'],
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
    // tooltips: {
    //     enabled: false
    // },
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
          },
          min: 0,
          max: 500
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
"use strict";

var chartData = {
  // You need labels for each set of data
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [{
    label: '# of Votes',
    data: [17, 193, 81],
    backgroundColor: ['rgba(0, 197, 220, 1)', 'rgba(87, 103, 195, 1)', 'rgba(255, 184, 34, 1)'],
    borderColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 3
  }]
}; // Donut Chart

var config = {
  type: 'doughnut',
  data: chartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 70,
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
"use strict";

var options = {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false // Removes the axix on the right hand side - thus removing the padding also

    }],
    yAxes: [{
      display: false // Removes the axix on the right hand side - thus removing the padding also

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
      data: [0, 14, 16, 23, 20, 10, 14, 24, 22, 28, 30, 24, 31],
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
      data: [6, 12, 16, 19, 16, 14, 16, 19, 19, 23, 24, 25, 26, 28],
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
      data: [20, 15, 18, 18, 11, 17, 18, 19, 23, 18, 19, 16],
      backgroundColor: 'rgba(255, 255, 132, 0.0)',
      borderColor: 'rgba(255, 184, 34, 1)',
      borderWidth: 3,
      pointRadius: 0,
      lineTension: 0.1
    }]
  },
  options: options
});
//# sourceMappingURL=all.js.map
