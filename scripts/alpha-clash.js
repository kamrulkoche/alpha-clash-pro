// function play() {
//     // step-1: hide the home screen. to hide the screen and the class hidden to the home section
//     const homeSection = document.getElementById("home-screen");
//     //console.log(homeSection);
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList);

//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     //playgroundSection.style.backgroundColor='red'
//     //console.log(playgroundSection.classList);
// }

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  //console.log("Player pressed :", playerPressed);

  //get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  //console.log(currentAlphabetElement.innerText);
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //console.log(playerPressed, expectedAlphabet);

  //check matched or not
  if (playerPressed === expectedAlphabet) {
    //console.log("You get a point");

    const currentScore = getTextElementValueByID("current-score");
    console.log(currentScore);
    const updatedScore = currentScore + 1;
    setTextElementValueByID("current-score", updatedScore);

    //console.log("You have pressed correctly", expectedAlphabet);

    //update score:
    //1.get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    //2.increase the score by 1
    // const newScore = currentScore + 1;

    //3.show the update score
    // currentScoreElement.innerText = newScore;

    //start the new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    // console.log("You missed.You loss a life");
    const currentLife = getTextElementValueByID("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueByID("current-life", updatedLife);

    if (updatedLife == 0) {
      //console.log("Game Over");
      gameOver();
    }
    //1.get the current score
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // console.log(currentLife);

    // //2.reduce the life count
    // const newLife = currentLife - 1;

    // //display the update life score
    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  //step-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  //console.log("Your random alphabet :", alphabet);

  //set random generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  //setBackgroundColorById("");
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score")
}
