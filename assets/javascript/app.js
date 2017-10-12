
//Objects and variables=======================================
function questionObject(question, choice1, choice2, choice3, choice4, image, answer) {
	this.question = question;
	this.choice1 = choice1;
	this.choice2 = choice2;
	this.choice3 = choice3;
	this.choice4 = choice4;
	this.image = image;
	this.answer = answer;
}


var question1 = new questionObject("What is Earth's largest continent?", "Asia", "Africa", "Antactica", "Europe", "assets/images/asia.jpg", "Asia");

var question2 = new questionObject("What razor-thin country accounts for more than half of the western coastline of South America?", "Bolivia", "Ecuador", "Peru", "Chile", "assets/images/chile.png", "Chile");

var question3 = new questionObject("What river runs through Baghdad?", "Tigris", "Karun", "Jordan", "Euphrates", "assets/images/tigris.jpg", "Tigris");

var question4 = new questionObject("What country has the most natural lakes?", "United States", "Australia", "India", "Canada", "assets/images/canada.jpg", "Canada");

var question5 = new questionObject("What is the only sea without any coasts?", "Mediterranean Sea", "Sargasso Sea", "Adriatic Sea", "Celebes Sea", "assets/images/sargasso.jpg", "Sargasso Sea");

var question6 = new questionObject("What percentage of the River Nile is located in Egypt?", "22%", "83%", "100%", "9%", "assets/images/nile.jpg", "22%");

var question7 = new questionObject("What is the driest place on Earth?", "Atacama Desert", "Sahara Desert", "Kufra, Libya", "McMurdo, Antarctica", "assets/images/mcmurdo.jpg", "McMurdo, Antarctica")

var questionArray = [question1, question2, question3, question4, question5, question6, question7];

var questionCount = 0;


var buttonObject = {
	type: "button",
	class: "btn btn-block button2"
};


var countDown = 15;
var gameStart = false;

var oneSecond;

var correctCount = 0;
var wrongCount = 0;
var unanswered = 0;
//Objects and variables=======================================




// Click button==============================================
$ (document).on("click", ".btn", function() {
	console.log("a button has been clicked");
	var userClick = $ (this).text();
	console.log(userClick);
	
	if (gameStart === false) {
		gameStart = true;
		newQuestion();
	}
	else {
		checkAnswer(userClick);
	}

});
// Click button===============================================



//Functions===================================================
function displayTimer() {
	$ ("#row1").text(countDown);
	countDown--;
	console.log(countDown);

	if (countDown === 0) {
		clearInterval(oneSecond);
		answerScreen(false, false);
	}

}

function newQuestion() {
	//Create timer
	displayTimer();
	oneSecond = setInterval(displayTimer, 1000 * 1);

	//Add question
	$ ("#row2").text(questionArray[questionCount].question);

	// Remove buttons
	$ ("#buttonDiv").empty();

	
	//Create buttons=========================================
	$ ("#buttonDiv").append($("<button>", buttonObject).text(questionArray[questionCount].choice1));
	$ ("#buttonDiv").append($("<button>", buttonObject).text(questionArray[questionCount].choice2));
	$ ("#buttonDiv").append($("<button>", buttonObject).text(questionArray[questionCount].choice3));
	$ ("#buttonDiv").append($("<button>", buttonObject).text(questionArray[questionCount].choice4));
	//Create buttons========================================
}

function answerScreen (correct, answered) {
	$ ("#buttonDiv").empty();
}

function checkAnswer (answerChoice) {
	var rightPick;
	clearInterval(oneSecond);

	if (answerChoice === questionArray[questionCount].answer) {
		console.log("correct");
		rightPick = true;
	}
	else {
		console.log("wrong");
		rightPick = false
	}

	answerScreen (rightPick, true);
}

//Functions===================================================