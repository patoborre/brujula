    window.addEventListener('load', function(){
    	// Wait for PhoneGap to load
   		document.addEventListener("deviceready", onDeviceReady, false);
    }, false);
    
    // The watch id references the current `watchHeading`
    var watchID = null;

    // PhoneGap is ready
    function onDeviceReady() {
    	var startBtn = $('#startBtn');
    	var stopBtn = $('#stopBtn');
    	
    	startBtn.click(function(){
    		startWatch();
    	});
    	
    	stopBtn.click(function(){
    		stopWatch();	
    	});    	
    }
    
    // Start watching the compass
    function startWatch() {

        //EJERCICIO 1 (2)
        var options = { frequency: 500 };
        watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }

    // Stop watching the compass
    function stopWatch() {
    
    	//EJERCICIO 1 (4)
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        }
    }
    
    // onSuccess
    function onSuccess(heading) {
    
    	//EJERCICIO 1
        //var element = document.getElementById('compass_text');
        //element.innerHTML = 'Grados Norte: ' + heading.magneticHeading + '<br />' +
        //                    'Timestamp: ' + heading.timestamp + '<br />';
    
    	//EJERCICIO 2
        var arrow = $('#arrow');
        var arrowOrientation = 360 - heading.magneticHeading;
        arrow.css('-webkit-transform','rotate(' + arrowOrientation + 'deg)');
        
    }    

    // onError: Failed to get the heading
    function onError(compassError) {
    	
    	//EJERCICIO 1 (3)
        alert('Error capturando datos: ' + compassError.code);
    }