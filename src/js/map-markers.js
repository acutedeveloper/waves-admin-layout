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

        console.log("Box Bounds: ", mapWrapperCoords);
        // The tooltip can't be more than the box width or height

        // If the distance on the right is more than the width of the tooltip, it needs to flip onto the other side
        let tooltip = document.querySelector(".tooltip");
        tooltip.classList.remove(pointLeftClass, pointRightClass);

        tooltip.innerHTML = text;
        tooltip.style.display = "block";

        let tooltipCoords = tooltip.getBoundingClientRect();

        // we need to flip the tooltip if it overflows the map wrapper
        let tooltipLeftPos = (elmCoords.x - mapWrapperCoords.x) + (elmCoords.width * 0.75);
        let tooltipRightPos = tooltipLeftPos + tooltipCoords.width;

        if(tooltipRightPos > mapWrapperCoords.width){
            let tooltipBoundMapDifference = tooltipRightPos - mapWrapperCoords.width;
            tooltip.style.left = tooltipLeftPos - tooltipBoundMapDifference - (elmCoords.width * 1.15) + 'px';
            tooltip.classList.add(pointRightClass);
        } else {
            tooltip.style.left = tooltipLeftPos + 'px';
            tooltip.classList.add(pointLeftClass);
        }

        tooltip.style.top = elmCoords.y - mapWrapperCoords.y + (tooltipCoords.height / 2) + 'px';

    }
})();