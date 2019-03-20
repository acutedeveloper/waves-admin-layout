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
      console.log("Events Setup");
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
      this.menu.classList.toggle("block");
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
