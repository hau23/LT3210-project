// Arrays to store terms
var terms = ["agriculture","industry","landscape","literature","guidebook"];

// Global variable for position of correct answer
var answerPosition = -1;

// Get random index for distractors
function Distractor()
{
	var random_number = Math.random() * english.length;
	var random_int = Math.floor(random_number);

	return random_int;
}
// Get random index for image
function RandomImage()
{
	var random_number = Math.random() * terms.length;
	var random_int = Math.floor(random_number);

	return random_int;
}
function RandomPosition()
{
	// Get a randon number between 0 and the length of the words array
	var random_number = Math.random() * 4;
	var random_int = Math.floor(random_number);

	return random_int;
}
function Question()
{
	// Distractors
	var choice0Index = Distractor();
	var choice1Index = Distractor();	
	var choice2Index = Distractor();	
	var choice3Index = Distractor();
	document.getElementById("choice0").innerHTML = english[choice0Index];
	document.getElementById("choice1").innerHTML = english[choice1Index];
	document.getElementById("choice2").innerHTML = english[choice2Index];
	document.getElementById("choice3").innerHTML = english[choice3Index];

	// Image
	var answerIndex = RandomImage();
	var answer = terms[answerIndex];
	var imageFileName = answer + ".jpg";
	document.getElementById("Picture").src = imageFileName;
	
	// / Select a position for the answer & update 
	answerPosition = RandomPosition();

	if (answerPosition == 0)
	{
		document.getElementById("choice0").innerHTML = answer;
	}
	else if (answerPosition == 1)
	{
		document.getElementById("choice1").innerHTML = answer;
	}
	else if (answerPosition == 2)
	{
		document.getElementById("choice2").innerHTML = answer;
	}
	else
	{
		document.getElementById("choice3").innerHTML = answer;
	}

	// Uncheck radio buttons
	document.getElementById("input0").checked = false;
	document.getElementById("input1").checked = false;
	document.getElementById("input2").checked = false;
	document.getElementById("input3").checked = false;
	
	// Disable "Next" button
	document.getElementById("pressnext").disabled = true;
	document.getElementById("message").innerHTML = "Choose the correct meaning in the sentence carefully!";
}
function play()
{
	// Read user's answers
	var userPosition = -1;

	if (document.getElementById("input0").checked)
	{
		userPosition = 0;
	}
	else if (document.getElementById("input1").checked)
	{
		userPosition = 1;
	}
	else if (document.getElementById("input2").checked)
	{
		userPosition = 2;
	}
	else if (document.getElementById("input3").checked)
	{
		userPosition = 3;
	}

	// Give feedback
	if (answerPosition == userPosition)
	{
		document.getElementById("message").innerHTML = "Correct! You are smart!";
	}
	else
	{
		document.getElementById("message").innerHTML = "Wrong! Don't give up. Try again!";
	}

	// Enable "Next" button
	document.getElementById("pressnext").disabled = false;
}