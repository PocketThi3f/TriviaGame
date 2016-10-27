var timeLeft = 45;
var audio = new Audio('assets/audio/nogood.mp3');

	$('.spellPool').hide();

function countDownTimer() {

	runLow = setInterval(goingDown, 1000);

}

//Timer running from 45 seconds
function goingDown() {

	timeLeft--;

		$('#countDown').html('<h2>You have '+timeLeft+' seconds left!</h2>');

	if (timeLeft < 1) {

		$('#countDown').html('<h1>Oops! Time is up!</h1>');

		staphIt();

		$('.container').hide();

		$('.spellPool').fadeIn();

		audio.play();

	}
}

countDownTimer();


function staphIt() {

	clearInterval(runLow);

}

// Where the stats are updated; WIP
// function scoreStats() {

// 	for (var i = 0; i < Things.length; i++) {

// 		if 	{

// 			$('input:checked').each(function() {

// 			correct++;

// 			$('#answeredA').html('<p>Direct Hits: '+correct+' </p>');

// 			}); 
// 		}	

// 		else {

// 			$('input:unchecked').each(function() {

// 			incorrect++;

// 			$('#missedA').html('<p>Spells Missed: '+incorrect+' </p>');

// 			});
	
// 		};
// 	}

//Regardless of answering questions, checked or unchecked.
$('#challengeAcc').on('click', function() {

	audio.play();

	$('.container').hide();

		$('.spellPool').fadeIn('slow');

});



