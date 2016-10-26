var timeLeft = 30;



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

		$('.spellPool').show();

		$()

	}
}

countDownTimer();


function staphIt() {

	clearInterval(runLow);

}


function scoreCalc() {

	var correct = $('.rightA').on('click', scoreCalc);

	if (correct > 0) {

		correct++;

		$('.rightA').html('<h2>Marvelous, you got '+correct+' questions correct!<h2>');
		
	} 

	else {

		$('.wrongA').on('click', scoreCalc);

		incorrect++;

	}



}

$('#challengeAcc').on('click', function() {

	$('.container').hide();

		$('.spellPool').show(function() {

		


		});


});