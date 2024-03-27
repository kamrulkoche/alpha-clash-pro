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
  console.log(playerPressed, expectedAlphabet);

  //check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You get a point");
    console.log("You have pressed correctly", expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet)
    continueGame();
  } else {
    console.log("You missed.You loss a life");
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
