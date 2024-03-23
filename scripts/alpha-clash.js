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

function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet :', alphabet);

    //set random generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
