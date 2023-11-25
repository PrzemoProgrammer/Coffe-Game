startGame();

function startGame() {
  this.addButtonEvent();
}

let isAnimPlaying = false;

function getElements() {
  const playButton = document.getElementById("play-button");
  const liquid = document.querySelector(".coffee-medium__liquid ");
  const smokeOne = document.querySelector(".coffee-medium__smoke-one");
  const smokeTwo = document.querySelector(".coffee-medium__smoke-two");
  const smokeThree = document.querySelector(".coffee-medium__smoke-three");
  const smokeFor = document.querySelector(".coffee-medium__smoke-for");
  const resultText = document.querySelector(".cup-scene .result-text");
  const resultText2 = document.querySelector(".result-text");
  const cof = document.querySelector(".coffee-dark-top");
  const machineScene = document.querySelector(".coffee-machine-scene");
  const section = document.querySelector(".section");

  return {
    playButton,
    liquid,
    smokeOne,
    smokeTwo,
    smokeThree,
    smokeFor,
    resultText,
    resultText2,
    cof,
    machineScene,
    section,
  };
}

function addButtonEvent() {
  const { playButton, machineScene } = getElements();

  playButton.addEventListener("click", () => {
    if (isAnimPlaying) return;
    setIsAnimPlaying(true);
    addSmokeAnim();
    offSmokeAnim();

    setTimeout(() => {
      setIsAnimPlaying(false);
      offSmokeAnim();
      machineScene.style.display = "none";
      addCupCoffeeAnim();
      addTextAnim();
      setCoffeeWord();
    }, 5500);
  });
}

function setIsAnimPlaying(value) {
  isAnimPlaying = value;
}

function offSmokeAnim() {
  const { smokeOne, smokeTwo, smokeThree, smokeFor } = getElements();
  smokeOne.style.animation = "none";
  smokeTwo.style.animation = "none";
  smokeThree.style.animation = "none";
  smokeFor.style.animation = "none";
}

function getRandomWord() {
  const possibleOutcomes = ["WIN", "SORRY"];
  return possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
}

function createSetTImeout(time, callback) {
  setTimeout(() => {
    callback();
  }, time);
}

function addCupCoffeeAnim() {
  const { section } = getElements();
  section.classList.add("active");
  section.classList.add("fadeInAnim");
}

function setCoffeeWord() {
  const { resultText, section } = getElements();
  const randomWord = getRandomWord();
  resultText.innerHTML = randomWord;
  section.style.display = "block";
}

function addTextAnim() {
  const { cof, resultText2 } = getElements();
  createSetTImeout(800, () => {
    cof.classList.add("textFadeInAnim");
    resultText2.classList.add("textFadeInAnim");
  });
}

function addSmokeAnim() {
  const { smokeOne, smokeTwo, smokeThree, smokeFor, liquid } = getElements();
  liquid.style.animation = "liquid 4s linear infinite";
  smokeOne.style.animation = "smokeOne 3s linear infinite";
  smokeTwo.style.animation = "smokeTwo 3s linear infinite";
  smokeThree.style.animation = "smokeTwo 3s linear infinite";
  smokeFor.style.animation = "smokeOne 3s linear infinite";
}

function offSmokeAnim() {
  const { liquid } = getElements();
  createSetTImeout(4000, () => {
    liquid.style.animation = "none";
  });
}
