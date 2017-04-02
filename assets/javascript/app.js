// Audio setup variable
var audio = new Audio('assets/audio/nogood.mp3');

// jQuery where ID is in the HTML
var panel = $('#quiz-area');

// Button click for start and end game
$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

// Questions Array in an object
var questions = [{
  question: "Who is the Chosen One?",
  answers: ["Draco Malfoy", "Neville Longbottom", "Hermoine Granger", "Ronald Weasley", "Harry Potter"],
  correctAnswer: "Harry Potter"
}, {
  question: "He who must not be named is...?",
  answers: ["Severus Snape", "Lucius Malfoy", "Tom Marvolo Riddle", "Albus Dumbledore", "Sirius Black"],
  correctAnswer: "Tom Marvolo Riddle"
}, {
  question: "It sucks every last drop of your happiness. What is this creature?",
  answers: ["Snatcher", "Kreacher", "Dementor", "Death Eater", "Lethifold"],
  correctAnswer: "Dementor"
}, {
  question: "You're a wizard, Harry. Who said these words to Harry Potter?",
  answers: ["Minerva McGonagall", "Rubeus Hagrid", "Remus Lupin", "Quirinus Quirrell", "Poppy Pompfrey"],
  correctAnswer: "Rubeus Hagrid"
}, {
  question: "You Lost Me My SERVANT!, screamed Lucius Malfoy. Who is this servant?",
  answers: ["Mountain Troll", "Basilisk", "Scabbers", "Hedwig", "Dobby"],
  correctAnswer: "Dobby"
}, {
  question: "In a game of Quidditch, what is the point value of a Golden Snitch?",
  answers: ["5 points", "10 points", "30 points", "150 points", "1 point"],
  correctAnswer: "150 points"
}, {
  question: "Which broomstick outclasses the others?",
  answers: ["Firebolt", "Moontrimmer", "Nimbus 2001", "Bluebottle", "Nimbus 2000"],
  correctAnswer: "Firebolt"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function() {
		game.counter--;
		$("#counter-number").html(game.counter);

		if (game.counter === 0) {
			console.log("Trivia is up!");
			game.done();
		}
	},
	start: function() {

		timer = setInterval(game.countdown, 1000);

		$("#subwrapper").prepend("<h2>Time remaining on the clock: <span id='counter-number'>120</span></h2>");
		$("#start").remove();

		for(var i = 0; i < questions.length; i++) {
			panel.append('<h2>' + questions[i].question + '</h2>');
			for(var j = 0; j < questions[i].answers.length; j++) {
				panel.append('<input class="magicalRiff" type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
			}
		}

		panel.append('<button id="done">Done</button>');
	},
	done: function() {

			$.each($("input[name='question-0']:checked"), function() {
	      if ($(this).val() == questions[0].correctAnswer) {
	        game.correct++;
	      } else {
	        game.incorrect++;
	      }
	    });
	    $.each($("input[name='question-1']:checked"), function() {
	        if ($(this).val() == questions[1].correctAnswer) {
	        game.correct++;
	      } else {
	        game.incorrect++;
	      }
	    });
	    $.each($("input[name='question-2']:checked"), function() {
	      if ($(this).val() == questions[2].correctAnswer) {
	        game.correct++;
	      } else {
	        game.incorrect++;
	      }
	    });
	    $.each($("input[name='question-3']:checked"), function() {
	      if ($(this).val() == questions[3].correctAnswer) {
	        game.correct++;
	      } else {
	        game.incorrect++;
	      }
	    });
	    $.each($("input[name='question-4']:checked"), function() {
	      if ($(this).val() == questions[4].correctAnswer) {
	        game.correct++;
	      } else {
	        game.incorrect++;
	      }
	    });
	    $.each($("input[name='question-5']:checked"), function() {
	      if ($(this).val() == questions[5].correctAnswer) {
	        game.correct++;
	      } else {
	        game.incorrect++;
	      }
	    });
	    $.each($("input[name='question-6']:checked"), function() {
	      if ($(this).val() == questions[6].correctAnswer) {
	        game.correct++;
	      } else {
	        game.incorrect++;
	      }
	    });
	    // For future use if want more questions!!! Update array of questions.
	    // $.each($("input[name='question-7']:checked"), function() {
	    //   if ($(this).val() == questions[7].correctAnswer) {
	    //     game.correct++;
	    //   } else {
	    //     game.incorrect++;
	    //   }
	    // });

	    this.result();
  },
    result: function() {

	    clearInterval(timer);

	    $('#subwrapper h2').remove();
	    panel.html('<h2>All Done!</h2>');
	    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
	    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
	    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }
};