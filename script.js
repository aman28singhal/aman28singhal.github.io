var colors = [];
var numSquares = 6;
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var result = document.querySelector("#res");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newGame");
var mode = document.querySelectorAll(".mode");

init();

function init(){
    for(var i=0;i<mode.length;i++){
        mode[i].addEventListener("click", function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    
            reset();
        })
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener("click", function(){
            pickedColor = squares[i].style.backgroundColor;
            if(pickedColor === targetColor){
                changeColor(pickedColor);
                result.textContent = "Correct!";
                h1.style.backgroundColor = pickedColor;
                newGame.textContent = "Play Again?"
            }
            else{
                this.style.backgroundColor = "#232323";
                result.textContent = "Try Again!"
            }
        })
    }

    reset();
}

function reset(){
    newGame.textContent = "New Game"
    colors = getRandomColors(numSquares);
    targetColor = pickRandom();
    colorDisplay.textContent = targetColor;
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    result.textContent = "";
}

newGame.addEventListener("click", function(){
   reset();
});

function changeColor(color){
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickRandom(){
    var randInt = Math.floor(Math.random() * colors.length);
    return colors[randInt];
};

function getRandomColors(num) {
    colorsNew = [];
    for(let i=0;i<num;i++){
        colorsNew.push(ranCol());

    }
    return colorsNew;
}

function ranCol(){
    r =  Math.floor(Math.random() * 256);
    g =  Math.floor(Math.random() * 256);
    b =  Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}