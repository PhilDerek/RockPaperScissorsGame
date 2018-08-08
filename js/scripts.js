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
    selectedIcons.style.display = "none";
    mainTag.style.backgroundImage = "";
}

function letsGetStarted () {
    compNum = 0;
    playerNum = 0;
    computerScore.innerHTML = compNum;
    playerScore.innerHTML = playerNum;
}

function whoWon () {    
    if (compNum == 10) {
        setTimeout(function() {
            afterScore();
            gameEnd2.style.display = "flex";
            letsGetStarted();
        }, 2000)       
    } else if (playerNum == 10) {
        setTimeout(function() {
            afterScore();
            gameEnd1.style.display = "flex";
            letsGetStarted();
        }, 2000)       
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

var playerSelectedIcon = document.getElementById("playerSelectedIcon");
var computerSelectedIcon = document.getElementById("computerSelectedIcon");

var playerNum = 0;
var compNum= 0;

var plusOneForPlayer = document.getElementById("plusOneForPlayer");
var plusOneForComputer = document.getElementById("plusOneForComputer");

var addOne = "+1";

rock.addEventListener("click", function () {
    playerPick.innerHTML = choice[0];
    playerSelectedIcon.style.backgroundImage = "url('images/icons8-rock-50.png')";
    playerSelectedIcon.classList.add("playerBattleAnimationClass");
    computerSelectedIcon.classList.add("computerBattleAnimationClass");
    setTimeout(function() {
        playerSelectedIcon.classList.remove("playerBattleAnimationClass");
        computerSelectedIcon.classList.remove("computerBattleAnimationClass");
    }, 1000);
    computerPick.innerHTML = pickFunc();
    computerSelectedIcon.style.backgroundImage = "url('images/icons8-" + computerPick.innerHTML + "-50.png')";    

    switch (computerPick.textContent){
        case "rock":
            break;
        case "paper":
            computerScore.innerHTML = compNum++ + addOne;
            computerScore.classList.add("scoreEffects");   
            setTimeout(function () {
                computerScore.innerHTML = compNum;
                computerScore.classList.remove("scoreEffects");
            }, 1000);
            break;
        default:
            playerScore.innerHTML = playerNum++ + addOne;
            playerScore.classList.add("scoreEffects");
            setTimeout(function () {
                playerScore.innerHTML = playerNum;
                playerScore.classList.remove("scoreEffects");
            }, 1000);
    }
    whoWon();
});

paper.addEventListener("click", function() {
    playerPick.innerHTML = choice[1];
    playerSelectedIcon.style.backgroundImage = "url('images/icons8-paper-50.png')";
    playerSelectedIcon.classList.add("playerBattleAnimationClass");
    computerSelectedIcon.classList.add("computerBattleAnimationClass");
    setTimeout(function() {
        playerSelectedIcon.classList.remove("playerBattleAnimationClass");
        computerSelectedIcon.classList.remove("computerBattleAnimationClass");
    }, 1000);
    computerPick.innerHTML = pickFunc();
    computerSelectedIcon.style.backgroundImage = "url('images/icons8-" + computerPick.innerHTML + "-50.png')";

    switch (computerPick.textContent){
        case "rock":
            playerScore.innerHTML = playerNum++ + addOne;
            playerScore.classList.add("scoreEffects");
            setTimeout(function () {
                playerScore.innerHTML = playerNum;
                playerScore.classList.remove("scoreEffects");
            }, 1000);
            break;
        case "paper":
            break;
        default:
            computerScore.innerHTML = compNum++ + addOne;
            computerScore.classList.add("scoreEffects");   
            setTimeout(function () {
                computerScore.innerHTML = compNum;
                computerScore.classList.remove("scoreEffects");
            }, 1000);
    }
    whoWon();
});

scissors.addEventListener("click", function () {
    playerPick.innerHTML = choice[2];
    playerSelectedIcon.style.backgroundImage = "url('images/icons8-scissors-50.png')";
    playerSelectedIcon.classList.add("playerBattleAnimationClass");
    computerSelectedIcon.classList.add("computerBattleAnimationClass");
    setTimeout(function() {
        playerSelectedIcon.classList.remove("playerBattleAnimationClass");
        computerSelectedIcon.classList.remove("computerBattleAnimationClass");
    }, 1000);
    computerPick.innerHTML = pickFunc();
    computerSelectedIcon.style.backgroundImage = "url('images/icons8-" + computerPick.innerHTML + "-50.png')";

    switch (computerPick.textContent){
        case "rock":
            computerScore.innerHTML = compNum++ + addOne; 
            computerScore.classList.add("scoreEffects");
            setTimeout(function () {
                computerScore.innerHTML = compNum;
                computerScore.classList.remove("scoreEffects");
            }, 1000);
            break;
        case "paper":
            playerScore.innerHTML = playerNum++ + addOne;
            playerScore.classList.add("scoreEffects");
            setTimeout(function () {
                playerScore.innerHTML = playerNum;
                playerScore.classList.remove("scoreEffects");
            }, 1000);
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
var selectedIcons = document.getElementById("selectedIcons");

//starting display
title.style.display = "none";
newGame.style.display = "flex";
playerNameWindow.style.display = "none";
gameStarted.style.display = "none";
selectedIcons.style.display = "none";

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
    selectedIcons.style.display = "flex";
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
