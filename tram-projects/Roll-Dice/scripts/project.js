/*
Author: Tram Le 
*/
let userCurrentScore = document.getElementById("user-current-score");
let userTotalScore = document.getElementById("user-total-score");
let computerCurrentScore = document.getElementById("comp-current-score");
let computerTotalScore = document.getElementById("comp-total-score");
const rollButton = document.getElementById("btn1");
const newGameButton = document.getElementById("btn2");
let displayText = document.getElementById("display-text");
let userDiceImages = document.querySelectorAll('.user-dice');
let compDiceImages = document.querySelectorAll('.comp-dice');
const popUp = document.getElementById("popup");
const closeBtn = document.getElementById("closeButton");

const maxTime = 3;
const maxNum = 6;
let totalUserScore = 0;
let totalComputerScore = 0;
let clickCounter = 0;


rollButton.addEventListener('click', function () {
    if (clickCounter < maxTime) {
        popUp.classList.add("hidden");
        displayScore();
        clickCounter++;

        if (clickCounter === maxTime) {
            setTimeout(function () {
                popUp.classList.remove("hidden");
                displayText.innerHTML = determineWinner();
                rotateImage();
            }, 0);
        }
    }
});

closeBtn.addEventListener('click', closeAndReset);
newGameButton.addEventListener('click', closeAndReset);


function rollPair() {
    // Generate random numbers for the two dice
    const dice1 = Math.floor(Math.random() * maxNum) + 1;
    const dice2 = Math.floor(Math.random() * maxNum) + 1;
    return [dice1, dice2]; //Return an array containing the results of the two dice rolls
};

function calculateScore(rollPair) { 
    if (rollPair[0] === 1 || rollPair[1] === 1) {
        return 0;
    } else if (rollPair[0] === rollPair[1]) {
        return (rollPair[0] * 4); // *4 as (dice1+dice2)*2
    } else {
        return rollPair[0] + rollPair[1];
    }
}

// Function to display dice images corresponding to the numbers rolled on the dice
function displayDiceImages(rollPair, diceImages) {
    for (let i = 0; i < diceImages.length; i++) {
        diceImages[i].src = `images/face-${rollPair[i]}.png`;
        diceImages[i].alt = `face-${rollPair[i]}`;
    }
}

function displayScore() {
    let userRollPair = rollPair();
    let compRollPair = rollPair();

    displayDiceImages(userRollPair, userDiceImages);
    displayDiceImages(compRollPair, compDiceImages);

    userCurrentScore.innerHTML = `Current Score: ${calculateScore(userRollPair)}`;
    computerCurrentScore.innerHTML = `Current Score: ${calculateScore(compRollPair)}`;

    totalUserScore += calculateScore(userRollPair);
    totalComputerScore += calculateScore(compRollPair);

    userTotalScore.innerHTML = `<strong>Total Score:</strong> ${totalUserScore}`;
    computerTotalScore.innerHTML = `<strong>Total Score:</strong> ${totalComputerScore}`;
}

function determineWinner() {
    let userWon = '<img id="popup-img" src="images/winner.png" alt="you-win"><h3>CONGRATULATIONS<br>YOU WON!</h3>';
    let compWon = '<img id="popup-img" src="images/looser.png" alt="you-loose"><h3>The computer won!</h3>';
    let equalScore = `<img id="popup-img" src="images/samescore.png" alt="you-win"><h3 id="popup-img">It's a tie!</h3>`;


    if (clickCounter === maxTime) {
        if (totalUserScore > totalComputerScore) {
            userWon += `<p>Your score: ${totalUserScore}<br>The computer's score: ${totalComputerScore}</p>`
            return userWon;
        } else if (totalUserScore < totalComputerScore) {
            compWon += `<p>Your score: ${totalUserScore} <br>The computer's score: ${totalComputerScore}</p>`;
            return compWon;
        } else {
            equalScore += `<p>You both have ${totalUserScore} score.</p>`;
            return equalScore;
        }
    }
    return "";
}

function rotateImage() {
    const popUpImage = document.getElementById('popup-img');
    let rotation = 0;
    const interval = setInterval(function () {
        rotation += 5; // Change the value for the speed of rotation

        // Apply rotation using CSS transform
        popUpImage.style.transform = `rotate(${rotation}deg)`;

        // Stop the rotation after reaching 360 degrees
        if (rotation >= 360) {
            clearInterval(interval);
        }
    }, 10);
}

function resetGame() {
    clickCounter = 0;
    totalUserScore = 0;
    totalComputerScore = 0;
    // Reset the score
    userCurrentScore.innerHTML = `Current Score: 0`;
    computerCurrentScore.innerHTML = `Current Score: 0`;
    userTotalScore.innerHTML = "<strong>Total Score:</strong> 0";
    computerTotalScore.innerHTML = "<strong>Total Score:</strong> 0";

    // Reset dice images
    resetDiceImages(userDiceImages);
    resetDiceImages(compDiceImages);
}

function resetDiceImages(diceImages) {
    for (let i = 0; i < diceImages.length; i++) {
        diceImages[i].src = ""; // Clear image source
        diceImages[i].alt = ""; // Clear alt attribute
    }
}

// function hides the popup and resets the game
function closeAndReset() {
    popUp.classList.add("hidden");
    resetGame();
}





