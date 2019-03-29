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

          if (!e.target.classList.contains(this.activateButtonClass)) {
            this.removeCssClass();
          }
        }.bind(this));
      }
    }
  }, {
    key: "toggleCssClass",
    value: function toggleCssClass() {
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
var headerMenu = new ToggleMyElement(menuConfig);
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
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu =
/*#__PURE__*/
function () {
  function Menu(menuObject) {
    _classCallCheck(this, Menu);

    this.parentMenu = document.querySelector(".".concat(menuObject.parentMenuClass));

    if (this.parentMenu !== null) {
      this.menuToggle = this.parentMenu.querySelector(".".concat(menuObject.menuToggle));
      this.menu = this.parentMenu.querySelector(".".concat(menuObject.menu));
      this.setEvents();
    } else {
      console.error("You have not added a class to the element");
    }
  }

  _createClass(Menu, [{
    key: "setEvents",
    value: function setEvents() {
      this.menuToggle.addEventListener('click', function (e) {
        this.toggleMenu(e);
      }.bind(this));
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      console.log('hide');

      if (this.menu.classList.contains("js-active")) {
        this.menu.classList.remove("js-active");
      }
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu(e) {
      this.menu.classList.toggle("hidden");
    }
  }]);

  return Menu;
}();

var mainMenu = new Menu({
  eventType: "hover",
  parentMenuClass: "js-menu",
  menuToggle: "js-menu-toggle",
  menu: "js-menu-list"
});
//# sourceMappingURL=all.js.map
