var initializeCaman = function() {
	document.caman = Caman('#canvas', 'assets/pic1.jpg', function(){});
}

var changeImageBrightness = function(brightness) {
	Caman('#canvas', 'assets/pic1.jpg', function(){
		this.brightness(brightness).render();
	});
}

var sliderValueChanged = function(event, ui) {
	console.log(ui.value);
	changeImageBrightness(ui.value);
}

var initializeSlider = function() {
	$("#slider").slider({
	    range: "min",
	    min: -100,
	    max: 100,
	    value: 0,
	    slide: sliderValueChanged
    });
}

var initialize = function() {
	
	initializeCaman();
	initializeSlider();
}

$('document').ready(initialize);



//        var cam = Caman("#canvas", "assets/pic1.jpg");
//
//        $("#slider-range").slider({
//            range: "min",
//            min: -100,
//            max: 100,
//            value: 0,
//            slide: function (event, ui) {
//                $("#amount").val(ui.value);
//     
//                cam.contrast(ui.value).render();
//
//
//            }
//
//        });
//        $("#amount").val($("#slider-range").slider("value"));
