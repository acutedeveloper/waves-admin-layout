class Menu{

    constructor(menuObject) {

        this.parentMenu = document.querySelector(`.${menuObject.parentMenuClass}`);

        if(this.parentMenu !== null){

            this.menuToggle = this.parentMenu.querySelector(`.${menuObject.menuToggle}`);
            this.menu = this.parentMenu.querySelector(`.${menuObject.menu}`);

            this.setEvents();
        } else {
            console.error("You have not added a class to the element");
        }

    }

    setEvents() {

        this.menuToggle.addEventListener('click', function(e){
            this.toggleMenu(e);
        }.bind(this));

    }

    hideMenu() {
        console.log('hide');
        if(this.menu.classList.contains("js-active")){
            this.menu.classList.remove("js-active");
        }
    }

    toggleMenu(e) {
        this.menu.classList.toggle("hidden");
    }
}

const mainMenu = new Menu({
    eventType: "hover",
    parentMenuClass: "js-menu",
    menuToggle: "js-menu-toggle",
    menu: "js-menu-list"
});
