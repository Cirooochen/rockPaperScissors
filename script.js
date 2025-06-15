const rPSOptions = ["Rock", "Paper", "Scissors"];

const winMap = {
  Rock: "Scissors",
  paper: "Rock",
  Scissors: "Paper",
};

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resetBtn = document.querySelector("#resetBtn");
const result = document.querySelector("#result");

const myScore = document.querySelector("#myScore");
const opponentScore = document.querySelector("#opponentScore");
const myCard = document.querySelector("#myCard");
const opponentCard = document.querySelector("#opponentCard");
const image = document.createElement("img");
const image2 = document.createElement("img");

rockBtn.addEventListener("click", function () {
  const myInput = "Rock";
  const opponentInput =
    rPSOptions[Math.floor(Math.random() * rPSOptions.length)];

  if (myInput === opponentInput) {
    result.textContent = "It's a draw game!";
  } else if (winMap[myInput] === opponentInput) {
    result.textContent = "Congrat! You win!";
    myScore.textContent = parseInt(myScore.textContent) + 1;
  } else {
    result.textContent = "Computer wins!";
    opponentScore.textContent = parseInt(opponentScore.textContent) + 1;
  }
  myCard.innerHTML = "";
  opponentCard.innerHTML = "";
  image.src = `img/${myInput}.png`;
  myCard.appendChild(image);
  image2.src = `img/${opponentInput}.png`;
  opponentCard.appendChild(image2);
});

paperBtn.addEventListener("click", function () {
  const myInput = "Paper";
  const opponentInput =
    rPSOptions[Math.floor(Math.random() * rPSOptions.length)];

  if (myInput === opponentInput) {
    result.textContent = "It's a draw game!";
  } else if (winMap[myInput] === opponentInput) {
    result.textContent = "Congrat! You win!";
    myScore.textContent = parseInt(myScore.textContent) + 1;
  } else {
    result.textContent = "Computer wins!";
    opponentScore.textContent = parseInt(opponentScore.textContent) + 1;
  }
  myCard.innerHTML = "";
  opponentCard.innerHTML = "";
  image.src = `img/${myInput}.png`;
  myCard.appendChild(image);
  image2.src = `img/${opponentInput}.png`;
  opponentCard.appendChild(image2);
});
scissorsBtn.addEventListener("click", function () {
  const myInput = "Scissors";
  const opponentInput =
    rPSOptions[Math.floor(Math.random() * rPSOptions.length)];

  if (myInput === opponentInput) {
    result.textContent = "It's a draw game!";
  } else if (winMap[myInput] === opponentInput) {
    result.textContent = "Congrat! You win!";
    myScore.textContent = parseInt(myScore.textContent) + 1;
  } else {
    result.textContent = "Computer wins!";
    opponentScore.textContent = parseInt(opponentScore.textContent) + 1;
  }
  myCard.innerHTML = "";
  opponentCard.innerHTML = "";
  image.src = `img/${myInput}.png`;
  myCard.appendChild(image);
  image2.src = `img/${opponentInput}.png`;
  opponentCard.appendChild(image2);
});
resetBtn.addEventListener("click", function () {
  myCard.innerHTML = "";
  opponentCard.innerHTML = "";
});
