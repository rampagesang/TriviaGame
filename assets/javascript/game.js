	$('#start').on('click', function(){
		game.start();
	})

	var questions = [{
		question:"Bob&rsquo;s father has 4 children. Momo, Meme, and Mumu are three of them. Who&rsquo;s the fourth? ",
		answers:["Mymy","Steve","Bob","Mimi"],
		correctAnswers: "Bob"
	}, {
		question:"If it took eight men ten hours to build a wall, how long would it take four men to build it? ",
		answers:["5 hours","0 hours","4 hours", "2 horus"],
		correctAnswers: "0 hours"
	}, {
		question:"If a plane crashes on the border between the US and Mexico, where do they bury the survivors? ",
		answers:["Mexico","No Where","America"," Trump's Wall"],
		correctAnswers: "No Where"
	}, {
		question:"What do you call a woman who knows where her husband is every night? ",
		answers:["Widow","Whiner","Jelous woman","Mrs. Detective"],
		correctAnswers: "Widow"
	}];

	var game = {
		correct: 0,
		incorrect: 0,
		counter: 30,


		countdown: function() {
			game.counter--;
			$('#counter').html(game.counter);
			if(game.counter<=0){
				console.log("Time is Up!");
				game.done();
			}
		},

		start: function() {
			timer= setInterval(game.countdown,1000);
			$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>')
			$('#start').remove();
			for (var i=0; i<questions.length; i++){
				$('#subwrapper').append('<h2>' + questions[i].question+ '</h2>');
				for (var j=0; j<questions[i].answers.length; j++){
					$('#subwrapper').append("<input type ='radio' name = 'question-" + i + "' value ='" + questions[i].answers[j]+ "'>"+questions[i].answers[j])
				}
			}
		},
			
		done: function () {
			$.each($("input[name='question-0']:checked"),function(a, b) {


				console.log(a, b);
				if($(this).val() == questions[0].correctAnswers){
					game.correct++;
				} else {
					game.incorrect++;
				}
			});

			$.each($("input[name='question-1']:checked"),function() {
				if($(this).val()==questions[1].correctAnswers){
					game.correct++;
				} else {
					game.incorrect++;
				}
			});

			$.each($("input[name='question-2']:checked"),function() {
				if($(this).val()==questions[2].correctAnswers){
					game.correct++;
				} else {
					game.incorrect++;
				}
			});

			$.each($("input[name='question-3']:checked"),function() {
				if($(this).val()==questions[3].correctAnswers){
					game.correct++;
				} else {
					game.incorrect++;
				}
			});

			this.result();
		},

		result: function() {

			clearInterval(timer);
			$('#subwrapper h2').remove();

			$('#subwrapper').html("<h2>ALL DONE !</h2>");
			$('#subwrapper').append("<h3>Correct Answers: " + this.correct +"</h3>");
			$('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect +"</h3>");
			$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
			


			
		}
	}
	
