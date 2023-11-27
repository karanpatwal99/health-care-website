
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {



	if (this.window.pageYOffset >= 2) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
});

var menu = document.querySelector("#fa-bars");
var header = document.querySelector("header nav ul");

menu.onclick = () => {
	menu.classList.toggle("fa-times");
	header.classList.toggle("menujs");
}

const myslide = document.querySelectorAll('.myslide'),
	dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

	let i;
	for (i = 0; i < myslide.length; i++) {
		myslide[i].style.display = "none";
	}
	for (i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if (n > myslide.length) {
		counter = 1;
	}
	if (n < 1) {
		counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


$(".tab-list").on("click", ".tab", function (e) {
	e.preventDefault();
	$(".tab").removeClass("active");
	$(".tab-content").removeClass("show");
	$(this).addClass("active");
	$($(this).attr("href")).addClass("show");
});


$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})
});



$('.play').on('click', function () {
	owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
	owl.trigger('stop.owl.autoplay')
})

$(document).ready(function () {
	$(".plus1").click(function () {
		$(this).toggleClass("fa-times");
		$(".one").slideToggle("fast");
	});
});

$(document).ready(function () {
	$(".plus2").click(function () {
		$(this).toggleClass("fa-times");
		$(".two").slideToggle("fast");
	});
});

$(document).ready(function () {
	$(".plus3").click(function () {
		$(this).toggleClass("fa-times");
		$(".three").slideToggle("fast");
	});
});

$(document).ready(function () {
	$(".plus4").click(function () {
		$(this).toggleClass("fa-times");
		$(".four").slideToggle("fast");
	});
});



$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() >0) {
			$('.emergency').fadeIn("fast");
		}
		else {
			$('.emergency').fadeOut("fast");
		}
	})
});

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			$('.scrolltop').fadeIn("fast");
		}
		else {
			$('.scrolltop').fadeOut("fast");
		}
	})
});

$('.scrolltop').click(function () {
	$("html,body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});





