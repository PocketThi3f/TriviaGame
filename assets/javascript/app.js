var timeLeft = 5;
var correctAnswers = 0;
var wrongAnswers = 0;


function countDownTimer() {

	runLow = setInterval(goingDown, 1000);

}


function goingDown() {

	timeLeft--;

		$('#countDown').html('<h2>You have '+timeLeft+' seconds left!</h2>');

	if (timeLeft < 1) {

		staphIt();

		$('#countDown').html('<h1>Oops! Time is up!</h1>');
	}
}

countDownTimer();


function staphIt() {

	clearInterval(runLow);

}


function scoreCalc() {

	if () {

	} 

	else () {


	}



}

