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

		$('.container').hide();

		$('.spellPool').fadeIn();

		audio.play();

	}
}

countDownTimer();


function staphIt() {

	clearInterval(runLow);

}

// $('input:checked').each(function() {

// 	if (correct > 0) {

// 		correct++;

// 		$('.rightA').html('<h2>Marvelous, you got '+correct+' questions correct!<h2>');
		
// 	} 

// 	else {

// 		$('.wrongA').on('click', scoreCalc);

// 		incorrect++;

// 	}
// }


$('#challengeAcc').on('click', function() {

	audio.play();

	$('.container').hide();

		$('.spellPool').fadeIn();

});

