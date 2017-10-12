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