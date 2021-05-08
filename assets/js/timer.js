var countdownDate = new Date("2021-05-24T10:00:00").getTime();

var daysElement = $("#days");
var hoursElement = $("#hours");
var minutesElement = $("#minutes");
var secondsElement = $("#seconds");

updateCountdown();

// Update the count down every 1 second
var interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countdownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the elements
	daysElement.text(String(days >= 0 ? days : 0).padStart(2, "0"));
	hoursElement.text(String(hours >= 0 ? hours : 0).padStart(2, "0"));
	minutesElement.text(String(minutes >= 0 ? minutes : 0).padStart(2, "0"));
	secondsElement.text(String(seconds >= 0 ? seconds : 0).padStart(2, "0"));

	// If the count down is finished
	if (distance < 0) clearInterval(interval);
}
