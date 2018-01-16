// Scroll Function

$(document).ready(function(){
	// Add smooth scrolling to all links
	$('a').on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			const hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});

// End Scroll Function

const contact = document.querySelectorAll('.contact'); //first we select that it's the contact box that we want to be controlling. And make it easier by summing that up in a variable so we don't have to write out the whole thing each time.

function toggleOpen() {
	this.classList.toggle('open');
} //on click the class open will toggle on and off

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}//because we are manipulating the flex property, or propertyname within the element. We also only want to be manipulating the open active if the element does have a flex value. we could do it with any property name
}

contact.forEach(contactinfo => contactinfo.addEventListener('click', toggleOpen));
contact.forEach(contactinfo => contactinfo.addEventListener('transitionend', toggleActive));
//for each thing within the contact class, anything we've selected. we are now listening for someone to click. when they do it will fire the toggleOpen function we wrote. When the transition has finished it will fire the toggle active class we have made.

let lastScrollTop = 0;

$(window).scroll(function() {
	let st = $(window).scrollTop();

	let fading = $('.fade');
	let dock = $( document ).height();
	let curr = lastScrollTop/dock;
	fading.css('opacity', curr);
	lastScrollTop = st;
});


$('.portfolio-box').hover(function() {
	$('.portfolio-example').fadeToggle('slow', 'linear').css('border', '4px solid blue');
	
});

$('.portfolio-box').hover(function() {
	$('.portfolio-box p').fadeToggle();
});

//Splash links


$(document).ready(function() {
	let stickyNavTop = $('.splash-links').offset().top;

	let stickyNav = function() {
		let scrollTop = $(window).scrollTop();
	

		if (scrollTop > stickyNavTop) {
			$('.splash-links').addClass('sticky');
		} else {
			$('.splash-links').removeClass('sticky');
		}
	};
	
	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});


});