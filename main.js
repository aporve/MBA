document.getElementById('ym-notification').style.bottom = '70px';
var elems = document.getElementsByClassName("from-icon");
for (var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundSize = "39px";
}

var observer = new MutationObserver(function(mutations) {
	document.getElementById('ym-notification').style.bottom = '70px';
});
var target = document.getElementById('ym-notification');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });

