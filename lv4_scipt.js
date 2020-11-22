/*synonym*/

var score = 0;

function start()
{
	document.getElementById("display").innerHTML = q1;
	var q1 = "rehabilitate"
	
}

function hint()
{
	var q1hint = "restore";
	var q1hint = q1hint.replace(/a|e|i|o|u/g, "*")
	document.getElementById("q1").value = q1hint;

	var q2 = "reserve";
	var q2hint = q2.replace(/a|e|i|o|u/g, "*")

	var q3 = "wither";
	var q3hint = q3.replace(/a|e|i|o|u/g, "*")

	var q4 = "scarlet";
	var q4hint = q4.replace(/a|e|i|o|u/g, "*")

	var q5 = "corporation";
	var q5hint = q5.replace(/a|e|i|o|u/g, "*")

	var q6 = "ground";
	var q6hint = q6.replace(/a|e|i|o|u/g, "*")

	var q7 = "astonished";
	var q7hint = q7.replace(/a|e|i|o|u/g, "*")
	
}

function feedback()
{
	var feedback = "";
	
	if (correct)
	{
		feedback = "Correct!";
	}
	
	else
	{
		feedback = "Try again!";
	}
	
	document.getElementById("feedback").innerHTML = feedback;
}

function play()
{
	var answer = document.getElementById("answer").value;
	var correct = ;
	
	var feedback = "You're correct!";
	if (answer != correct)
	{
 		feedback = "The correct answer is "" + correct + ".";
	}
	else
	{
		score++;
	}
	document.getElementById("feedback").innerHTML = feedback;
	document.getElementById("score").innerHTML = "Score: " + score;

function myscore()
{
	
	
}