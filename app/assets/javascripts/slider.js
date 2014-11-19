window.onload=function(){


var BlurIt = document.getElementById('blur');
var SharpIt = document.getElementById('sharpen');
var EdgeIt = document.getElementById('edges');
var EmbossIt = document.getElementById('emboss');
var GreysIt = document.getElementById('greyscale');
var MosaicIt = document.getElementById('mosaic');
var TintIt = document.getElementById('tint')

//add event listener
BlurIt.addEventListener('click', function(event) {
document.getElementById('testpicture').setAttribute('class', 'filtered filter-blur pb-ref-filter-blur-0');
});

SharpIt.addEventListener('click', function(event) {
document.getElementById('testpicture').setAttribute('class', 'filter-sharpen');
});


EdgeIt.addEventListener('click', function(event) {
document.getElementById('testpicture').setAttribute('class', 'filter-edges');
});


EmbossIt.addEventListener('click', function(event) {
document.getElementById('testpicture').setAttribute('class', 'filter-emboss');
});


GreysIt.addEventListener('click', function(event) {
document.getElementById('testpicture').setAttribute('class', 'filter-greyscale');
});


TintIt.addEventListener('click', function(event) {
document.getElementById('testpicture').setAttribute('class', 'filter-tint');
});
}




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
