zoomWithWheel = false; 
zoomLevel     = 1;
zoomIncrement = 0.2;

window.addEventListener("mousewheel", function( event ) {

    if( zoomWithWheel ) {
        
        event.preventDefault();
        event.stopPropagation();

        if( event.wheelDeltaY > 0  ) {
            zoomLevel += zoomIncrement;
        }
        if( event.wheelDeltaY < 0 ) {
            zoomLevel -= zoomIncrement;
        }
        // CSS transform works much less jankily than zoom
        document.body.style.webkitTransform = "scale(" + zoomLevel + ")";
        document.body.style.webkitTransformOrigin="0 0";
        return false;
    }
}, true );


/* 
    Auto scroll listens for this event, so we
    have to intercept it and cancel it
*/
window.addEventListener("mousedown", function( event ) {
    if(event.button == 1) {
      event.preventDefault();
      event.stopPropagation();
    }
}, true);


/*
    Chrome listens for this event to trigger
    open in new tab with middle click, it gets
    a bit confusing to mix and match, so we 
    have to intercept and cancel that also
*/
window.addEventListener("click", function( event ) {
    if(event.button == 1){
        event.preventDefault();
        event.stopPropagation();
    }
}, true);

/*
    And finally, we can stick our own event listener 
    on mouseup and off we jolly well go, eh ?
*/
window.addEventListener("mouseup", function( event ) {
    if(event.button == 1){
        event.preventDefault();
        event.stopPropagation();
        zoomWithWheel = !zoomWithWheel;
    }
}, true);