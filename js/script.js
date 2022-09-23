$('button').on("mouseenter", function() {
	$(this).removeClass('makeRed').addClass('makeBlue');
});

$('button').on("mouseleave", function() {
	$(this).removeClass('makeBlue').addClass('makeRed');
});

