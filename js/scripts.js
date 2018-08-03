var mainTag = document.getElementById("bigImage");

function changeImg () {    
    mainTag.style.backgroundImage = "url('background_image.jpg')";
    mainTag.style.backgroundSize = "cover";
    mainTag.style.backgroundPosition = "center";
    mainTag.style.height = "100vh";
}

function pickFunc () {
    return choice[Math.floor(Math.random() * 3)];   
}

var gameEnd1 = document.getElementById("gameEnd1");
var gameEnd2 = document.getElementById("gameEnd2");

function afterScore () {
    title.style.display = "none";
    gameStarted.style.display = "none";    
    mainTag.style.backgroundImage = "";
}

function letsGetStarted () {
    compNum = 0;
    playerNum = 0;
    computerScore.innerHTML = compNum;
    playerScore.innerHTML = playerNum;
}

function whoWon () {    
    if (computerScore.textContent == "10") {
        afterScore();
        gameEnd2.style.display = "flex";
        letsGetStarted();
    } else if (playerScore.textContent == "10") {
        afterScore();
        gameEnd1.style.display = "flex";
        letsGetStarted();
    }
}

var playerPick = document.getElementById("playerPick");
var computerPick = document.getElementById("computerPick");

var choice = ["rock", "paper", "scissors"];

var rock = document.getElementById("rock"),
    paper = document.getElementById("paper"),
    scissors = document.getElementById("scissors");

var playerScore = document.getElementById("playerScore");
var computerScore = document.getElementById("computerScore");

var playerNum = 0;
var compNum= 0;

rock.addEventListener("click", function () {
    playerPick.innerHTML = choice[0];
    computerPick.innerHTML = pickFunc();
    switch (computerPick.textContent){
        case "rock":
            break;
        case "paper":
            computerScore.innerHTML = ++compNum;
            break;
        default:
            playerScore.innerHTML = ++playerNum;
    }
    whoWon();
});

paper.addEventListener("click", function() {
    playerPick.innerHTML = choice[1];
    computerPick.innerHTML = pickFunc();
    switch (computerPick.textContent){
        case "rock":
            playerScore.innerHTML = ++playerNum;
            break;
        case "paper":
            break;
        default:
            computerScore.innerHTML = ++compNum;
    }
    whoWon();
});
scissors.addEventListener("click", function () {
    playerPick.innerHTML = choice[2];
    computerPick.innerHTML = pickFunc();
    switch (computerPick.textContent){
        case "rock":
            computerScore.innerHTML = ++compNum;
            break;
        case "paper":
            playerScore.innerHTML = ++playerNum;
            break;
        default:
            computerScore.innerHTML = compNum;
            playerScore.innerHTML = playerNum;
    }
    whoWon();
});

var title = document.getElementById("title");
var newGame = document.getElementById("newGame");
var playerNameWindow = document.getElementById("playerNameWindow");
var gameStarted = document.getElementById("gameStarted");

//starting display
title.style.display = "none";
newGame.style.display = "flex";
playerNameWindow.style.display = "none";
gameStarted.style.display = "none";

//first click action
var startGame = document.getElementById("startGame");

var inputName = document.getElementById("inputName");
inputName.value = "";

startGame.addEventListener("click", function() {
    newGame.style.display = "none";  
    playerNameWindow.style.display = "flex";
})

//start game actions
var playerName = document.getElementById("playerName");

var finalStart = document.getElementById("finalStart");

finalStart.addEventListener("click", function() {
    if (inputName.value) {    
        playerName.innerHTML = inputName.value;
    }

    playerNameWindow.style.display = "none";
    title.style.display = "flex";
    gameStarted.style.display = "block";
    changeImg();
})

//End of game
var reloadButton = document.getElementsByClassName("reloadButton");

for (var i = 0; i < reloadButton.length; i++) {
    reloadButton[i].addEventListener("click", function() {
        var flexContainer = document.getElementsByClassName("flex-container");

        for (var i = 0; i < flexContainer.length; i++) {
            flexContainer[i].style.display = "none";
        }        
        playerNameWindow.style.display = "flex";
    });
}
