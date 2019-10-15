var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		//^^^ This is a ternary operator, it does this vvv
		// if(this.textContent === "Easy"){
		// 	numSquares = 3;
		// }else{
		// 	numSquares = 6;
		// }

		reset();
	});
}
function reset(){
		//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of the squares
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
		
	}
}
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// })


// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// })

//controls reset button
resetButton.addEventListener("click", function(){
	reset();
})
//changes the span in the h1 to match the current picked color
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


//a function that changes the colors when a correct color is picked 
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given color
}
//choosed the pickedColor var
function pickColor(){
	var  random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generates an array of six colors for var colors
function generateRandomColors(num){
	//make an array 
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
		

	}
	//return that array
	return arr;
}
//creates the random colors to plug into the array above
function randomColor(){
	//pick a "red" 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}