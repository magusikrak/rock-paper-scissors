var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var left = document.getElementById("left");
var right = document.getElementById("right");

var leftSide;
var rightSide;
rock.addEventListener("click", functionRock);
paper.addEventListener("click", functionPaper);
scissors.addEventListener("click", functionScissors);
function functionRock() {
	// leftArr = [0, 0, 0];
    // leftArr[0] = 1;
    leftSide="rock"
	left.remove();
	document.getElementById("leftPlayer").className = "fas fa-10x fa-hand-rock";
	leftCss();
	rightRandom();
}
function functionPaper() {
	// leftArr = [0, 0, 0];
    // leftArr[1] = 1;\
    leftSide="paper"
	left.remove();
	document.getElementById("leftPlayer").className = "far fa-10x fa-sticky-note";
	leftCss();
	rightRandom();
}
function functionScissors() {
	// leftArr = [0, 0, 0];
    // leftArr[2] = 1;
    leftSide="scissor"
	left.remove();
	document.getElementById("leftPlayer").className =
		"far fa-10x fa-hand-scissors";
	leftCss();
	rightRandom();
}

function rightRandom() {
	let choice = 0;
	choice = Math.floor(Math.random() * 3);
	// console.log(choice);
	if (choice == 0) {
		rightRock();
	}
	if (choice == 1) {
		rightPaper();
	}
	if (choice == 2) {
		rightScissors();
	}
}
function rightRock() {
	// rightArr = [0, 0, 0];
    // rightArr[0] = 1;
    rightSide="rock";
	right.remove();
	document.getElementById("rightPlayer").className = "far fa-10x fa-hand-rock";
	leftCss();
	winnerCheck();
}
function rightPaper() {
	// rightArr = [0, 0, 0];
    // rightArr[0] = 1;
    rightSide="paper";
	right.remove();
	document.getElementById("rightPlayer").className =
		"far fa-10x fa-sticky-note";
	leftCss();
	winnerCheck();
}
function rightScissors() {
	// rightArr = [0, 0, 0];
	// rightArr[0] = 1;
    rightSide="scissor";
	right.remove();
	document.getElementById("rightPlayer").className =
		"far fa-10x fa-hand-scissors";
	leftCss();
	winnerCheck();
}
function winnerCheck() {
    if(rightSide==leftSide)
    {
        gameDraw();
    }
    if(rightSide=="rock"&&leftSide=="scissor")
    {
        rightWins();
    }
    if(leftSide=="rock"&&rightSide=="scissor")
    {
        leftWins();
    }
    if(rightSide=="rock"&&leftSide=="paper")
    {
        leftWins();
    }
    if(leftSide=="rock"&&rightSide=="paper")
    {
        rightWins();
    }
    if(rightSide=="paper"&&leftSide=="scissor")
    {
        leftWins();
    }
    if(leftSide=="paper"&&rightSide=="scissor")
    {
        rightWins();
    }
	
}
function gameDraw() {
    document.getElementById('winner').firstChild.nodeValue="DRAW!!!";
}
function rightWins() {
    // console.log("right");
    document.getElementById('winner').firstChild.nodeValue="COMPUTER WINS!!!";
    
}
function leftWins() {
    // console.log("left");
    document.getElementById('winner').firstChild.nodeValue="YOU WIN!!!";
    
}
function reset() {
	right.remove();
	left.remove();
	document.getElementById("leftPlayer").className = "far fa-10x fa-smile-beam";
	document.getElementById("rightPlayer").className = "far fa-10x fa-smile-beam";

	document.getElementById("leftPlayer").style.backgroundColor = "aqua";
	document.getElementById("leftPlayer").style.padding = "10px";
	document.getElementById("leftPlayer").style.margin = "100px";
	document.getElementById("leftPlayer").style.border = "3px solid black";
	document.getElementById("rightPlayer").style.backgroundColor =
		"rgb(151, 182, 182)";
	document.getElementById("rightPlayer").style.padding = "10px";
	document.getElementById("rightPlayer").style.margin = "100px";
    document.getElementById("rightPlayer").style.border = "3px solid black";
    document.getElementById('winner').firstChild.nodeValue="Rock Papers Scissors";
    
}
function leftCss() {
	document.getElementById("leftPlayer").style.backgroundColor = "aqua";
	document.getElementById("leftPlayer").style.padding = "10px";
	document.getElementById("leftPlayer").style.margin = "100px";
	document.getElementById("leftPlayer").style.border = "3px solid black";

	document.getElementById("rightPlayer").style.backgroundColor =
		"rgb(151, 182, 182)";
	document.getElementById("rightPlayer").style.padding = "10px";
	document.getElementById("rightPlayer").style.margin = "100px";
	document.getElementById("rightPlayer").style.border = "3px solid black";
}
