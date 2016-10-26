var timeLeft = 45;
var audio = new Audio('assets/audio/nogood.mp3');


$('.spellPool').hide();

function countDownTimer() {

	runLow = setInterval(goingDown, 1000);

}


function goingDown() {

	timeLeft--;

		$('#countDown').html('<h2>You have '+timeLeft+' seconds left!</h2>');

	if (timeLeft < 1) {

		staphIt();

		$('#countDown').html('<h1>Oops! Time is up!</h1>');

		$('.container').fadeout();

		$('.spellPool').fadeIn();

		audio.play();

	}
}

countDownTimer();


function staphIt() {

	clearInterval(runLow);

}

// function scoreStats() {


// 	if 	{

// 		$('input:checked').each(function() {

// 		correct++;

// 		$('.rightA').html('<p>Direct Hits: '+correct+' </p>');

// 		}); 
// 	}	

// 	else {

// 		$('input:unchecked').each(function() {

// 		incorrect++;

// 		$('.missedA').html('<p>Spells Missed: '+incorrect+' </p>');

// 		});
	
// 	};
// }


$('#challengeAcc').on('click', function() {

	audio.play();

	$('.container').hide();

		$('.spellPool').fadeIn('slow');

});



