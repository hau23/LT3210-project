var canvas;
var ctx;
var timer;

//Array of words
var chinwords = ["疼痛","扶手椅","彎曲","毯","毛蟲","複雜"];
var engwords = ["ache","armchair","bend","blanket","caterpillar","complicated"];

// Index of model answer
var answerIndex = -1;

// Current position of model answer
var answer_x = -1;
var answer_y = -1;

// Position of plate
var plate_x = -1;
var plate_y = -1;

function draw()
{
	// Clear previous graphics but do not erase the plate
	ctx.clearRect(0, 0, canvas.width, canvas.height-10);

	// Move the model answer
	answer_x += 3;
	answer_y += 3;

	// Get model answer
	var answer = engwords[answerIndex];

	// Draw model answer
	ctx.font = "20px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.fillText(answer, answer_x, answer_y);

	// Calculate distance between plate and answer
	var distance = answer_x - plate_x;

	// Detect whether the word is below surface of plate
	if (answer_y >= plate_y)
	{
		clearInterval(timer);
	
		// Detect whether the word landed on the plate
		if ((distance < 50) && (distance > -50))
		{
			document.getElementById("message").innerHTML = "Good Job!";
		}
		else
		{
			document.getElementById("message").innerHTML = "Uh Oh... Please try again! You can do it!";
		}
	}

}

// Get random index for chinese word
function getRandomChin()
{
	// Get a randon number between 0 and the length of the words array
	var random_number = Math.random() * engwords.length;
	
	// Get rid of decimal places to make the random number an integer
	var random_int = Math.floor(random_number);
  
  return random_int;
}

// Display random chinese word, draws plate & release a falling word
function play()
{
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	
	// Select and display an image
	// answerIndex = getRandomChin();
	// var answer = engwords[answerIndex];
	// var showchinword = chinwords[answerIndex];
	// document.getElementById("question") = showchinword;
	
	// Reset initial position of english word
	answer_x = 0;
	answer_y = 0;

	// Erase previous graphics, if any
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// Draw plate
	plate_x = 0;
	plate_y = canvas.height - 10; 
	ctx.fillStyle = "#5F9EA0";	
	ctx.fillRect(plate_x, plate_y,70,10);

	// Stop previous animation, if any
	clearInterval(timer);

	// Start new animation
	timer = setInterval(draw, 100);

	document.getElementById("message").innerHTML = "Move the plate to catch the word!";

}

function moveleft()
{
	// Erase previous plate
	ctx.clearRect(plate_x, plate_y, 70, 10);

	// Move plate to left
	if (plate_x > 0)
	{
		plate_x -= 20;
	}

	// Draw new plate
	ctx.fillStyle = "#5F9EA0";	
	ctx.fillRect(plate_x, plate_y, 70, 10);

}

function moveright()
{

	// Erase previous plate
	ctx.clearRect(plate_x, plate_y, 70, 10);

	// Move plate to right
	if (plate_x < (canvas.width - 50))
	{
		plate_x += 20;
	}

	// Draw new plate
	ctx.fillStyle = "#5F9EA0";	
	ctx.fillRect(plate_x, plate_y, 70, 10);

}
