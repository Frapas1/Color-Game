var numSquares = 6;
var colors = [];
var goalColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode buttons event listeners
  setupModeButtons();
  //Square listeners
  setupSquares();

  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3: numSquares =6; //turnary operator
       reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
  //add click listeners to squares
      squares[i].addEventListener("click", function(){
        //grab color out of square
        var clickedColor = this.style.backgroundColor;
        //compare clicked to goal color
        if (clickedColor === goalColor){
          messageDisplay.textContent = "Correct";
          resetButton.textContent = "Play Again?";
          colorChange(clickedColor);
          h1.style.background = clickedColor;
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
      });
    }
}

function reset(){
colors = generateRandomColors(numSquares);
// pick a random color
  goalColor = pickColor();
//change display to match picked color
  colorDisplay.textContent = goalColor;
// change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){  //if there are generated colors
      squares[i].style.display = "block"; //show the colors
      squares[i].style.backgroundColor = colors[i];
    } else {//if no colors in squares, turn off display.
      squares[i].style.display = "none";
    }
  }
// change background color back
  h1.style.backgroundColor = "steelblue"; 
//make the message display empty
  messageDisplay.textContent = "";
  resetButton.textContent = "NEW COLORS";

}

resetButton.addEventListener("click", function(){
reset();

}) 

for(var i = 0; i < squares.length; i++){
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color out of square
    var clickedColor = this.style.backgroundColor;
    //compare clicked to goal color
    if (clickedColor === goalColor){
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      colorChange(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function colorChange(color){
  //loop through squares
  for ( var i = 0; i < squares.length ; i++)
  //change each color when correct
  squares[i].style.backgroundColor = color;
}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}
function generateRandomColors(num){
  // make an array
  var arr = []
  // add num random colors to array
  for(var i = 0; i < num; i++){
  // get random color and push into arr
  arr.push(randomColor())
  // return array at the end
}
  return arr;
    
}

function randomColor(){
  // pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a blue from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a green from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")" ;
}
