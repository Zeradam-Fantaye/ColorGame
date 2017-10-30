function i(id){
	return document.getElementById(id);
}

function c(class_s){
	return document.getElementsByClassName(class_s);
}

function t(tag){
	return document.getElementsByTagName(tag)
}

function q(query){
	return document.querySelector(query);
}

function q_all(query){
	return document.querySelectorAll(query);
}

var numColors;
var colorAnswer;
var colors = [];
var squares = q_all(".square");
var headerDisplay = i("headerDisplay");
var message = i("message");
var h1 = t("h1")[0];
var newColor = q("#reset");
var modebtn = c("mode");

init();

function init(){
	numColors = 6;
	generateColorArray(numColors);
	pickAnyRandomColor();
	setupSquares();
	setupButtons();
	
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			 
			 if(this.style.backgroundColor === colorAnswer){
			 	message.textContent = "Correct";
			 	allSameColor();
			 	h1.style.backgroundColor = colorAnswer;
			 	newColor.textContent = "Play Again?";

			 }else{
			 	message.textContent = "Try Again!";
			 	this.style.backgroundColor = "#232323";

			 }
		});

	}
}

function setupButtons(){
	for (var i = 0; i < modebtn.length; i++){
		modebtn[i].addEventListener("click", function(){
			
			initializeColorArray();

			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy")
				numColors = 3;
			else
				numColors = 6;
			reset();
		});
	}
}

newColor.addEventListener("click", function(){
	numColors = 6;
	this.textContent = "new color";
	reset();
});

function reset(){

	generateColorArray(numColors);
	pickAnyRandomColor();
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}else{
			squares[i].style.display = "none";
		}

	}
}

function initializeColorArray(){
	for(var i = 0; i < colors.length; i++){
		colors[i] = 0;
	}
}

function allSameColor(){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colorAnswer;
	}
}

function createColor(){
	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);

	var str = "rgb(" + r + ", " + g + ", " + b + ")";

	return str;
}

function generateColorArray(numColors){

	// Reset the colors array


	//Initialize the "colors" array
	for (var i = 0; i < numColors; i++){
		colors[i] = createColor();
	}
}

function pickAnyRandomColor(){
	var random_num = Math.floor(Math.random() * numColors);
	colorAnswer = colors[random_num];
	headerDisplay.textContent = colorAnswer;
}


















