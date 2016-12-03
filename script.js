$(document).ready(function () {

	//Header Nav Btns
  $("#about-btn").click(function() {
  	$('html, body').animate({
    	scrollTop: $("#about").offset().top
  	}, 1000);
	});

	$("#work-btn").click(function() {
  	$('html, body').animate({
    	scrollTop: $("#work").offset().top
  	}, 1000);
	});

	$("#contact-btn").click(function() {
  	$('html, body').animate({
    	scrollTop: $("#contact").offset().top
  	}, 1000);
	});

	//Footer Nav Btns
	$("#footer-about-btn").click(function() {
  	$('html, body').animate({
    	scrollTop: $("#about").offset().top
  	}, 1000);
	});

	$("#footer-work-btn").click(function() {
  	$('html, body').animate({
    	scrollTop: $("#work").offset().top
  	}, 1000);
	});

	$("#footer-contact-btn").click(function() {
  	$('html, body').animate({
    	scrollTop: $("#contact").offset().top
  	}, 1000);
	});

});