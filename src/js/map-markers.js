(function(){
    const mapMarkers = document.querySelector('#mapMarkers');

    mapMarkers.addEventListener('click', function(e) {
        if(e.target.closest(".map-marker")){
            showTooltip(e.target.closest(".map-marker"), "YaaaaaYYYY!");
        }
    });

    function showTooltip(element, text) {

        const pointLeftClass = "tooltip--point-left";
        const pointRightClass = "tooltip--point-right";

        const elmCoords = element.getBoundingClientRect();

        // We need the height of the map wrapper
        let mapWrapper = document.querySelector('.panel__map-wrapper');
        let mapWrapperCoords = mapWrapper.getBoundingClientRect();

        console.log("Marker: ", elmCoords);
        console.log("Box Bounds: ", mapWrapperCoords);
        // The tooltip can't be more than the box width or height

        // If the distance on the right is more than the width of the tooltip, it needs to flip onto the other side
        let tooltip = document.querySelector(".tooltip");
        tooltip.classList.remove(pointLeftClass, pointRightClass);

        tooltip.style.display = "block";

        let tooltipCoords = tooltip.getBoundingClientRect();
        console.log("Tooltip Coords: ", tooltipCoords);

        // we need to flip the tooltip if it overflows the map wrapper
        let tooltipLeftPos = (elmCoords.x - mapWrapperCoords.x) + elmCoords.width;
        let tooltipRightPos = tooltipLeftPos + tooltipCoords.width;

        // if(tooltipRightPos > mapWrapperCoords.width){
        //     let tooltipBoundMapDifference = tooltipRightPos - mapWrapperCoords.width;
        //     tooltip.style.left = tooltipLeftPos - tooltipBoundMapDifference - elmCoords.width + 'px';
        //     tooltip.classList.add(pointRightClass);
        // } else {
        //     tooltip.style.left = tooltipLeftPos + 'px';
        //     tooltip.classList.add(pointLeftClass);
        // }

        if(elmCoords.x > mapWrapperCoords.x){
            tooltip.style.left = (elmCoords.x - mapWrapperCoords.x) - tooltipCoords.width + 'px';

            // we want to check if the tooltip exceeds the boundaries of the wrapper
            // if so, we will flip its position

            // We could also get all of the co-ords of the marker then calculate the space that can fit

        } else {
            tooltip.style.left = (mapWrapperCoords.x - elmCoords.x) - tooltipCoords.width + 'px';
        }


        if(elmCoords.y > mapWrapperCoords.y){
            console.log(elmCoords.y - mapWrapperCoords.y);
            tooltip.style.top = (elmCoords.y - mapWrapperCoords.y) + 'px';
        } else {
            tooltip.style.top = (mapWrapperCoords.y - elmCoords.y) + 'px';
        }

    }
})();