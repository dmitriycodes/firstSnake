var up           = document.querySelector('.btn-up'),
    right        = document.querySelector('.btn-right'),
    down         = document.querySelector('.btn-down'),
    left         = document.querySelector('.btn-left'),
    elem         = document.querySelector('.elem'),
		stop         = document.querySelector('.btn-stop'),
		topDistance  = +parseInt(elem.style.top),
		leftDistance = +parseInt(elem.style.left);

function a() {
	elem.style.top = (topDistance - 5) + 'px';
	topDistance = +parseInt(elem.style.top);
}

function r() {
	elem.style.left = (leftDistance + 5) + 'px';
	leftDistance = +parseInt(elem.style.left);
}

function d() {
	elem.style.top = (topDistance + 5) + 'px';
	topDistance = +parseInt(elem.style.top);
}

function l() {
	elem.style.left = (leftDistance - 5) + 'px';
	leftDistance = +parseInt(elem.style.left);
}


up.addEventListener('click', function() {
	a();
});
 
right.addEventListener('click', function() {
	r();
});
down.addEventListener('click', function() {
	d();
});

left.addEventListener('click', function() {
	l();
});


 








