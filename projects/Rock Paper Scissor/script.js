const player = document.getElementById("player");
const computer = document.getElementById("computer");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const result = document.getElementById("result");

function chooseMove(num) {
  if (num == 0) {
    return "rock";
  } else if (num == 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function computerMove() {
  const randomNumber = Math.floor(Math.random() * 3);
  const move = chooseMove(randomNumber);

  return move;
}

function playerMove(playermove) {
  if (Number(player.textContent) == 10) {
    console.log("Player won the game");
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    rockBtn.disabled = true;
  } else if (Number(computer.textContent) == 10) {
    console.log("Computer won the game");
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    rockBtn.disabled = true;
  }

  const playerValue = playermove;
  const computerValue = computerMove();

  console.log("Player Move :" + playerValue);
  console.log("Computer Move :" + computerValue);

  if (
    (playerValue == "scissor" && computerValue == "paper") ||
    (playerValue == "rock" && computerValue == "scissor") ||
    (playerValue == "paper" && computerValue == "rock")
  ) {
    console.log("Player Won");
    player.textContent = Number(player.textContent) + 1;
  } else if (playerValue === computerValue) {
    console.log("Draw");
  } else {
    console.log("Computer Won");
    computer.textContent = Number(computer.textContent) + 1;
  }
}
