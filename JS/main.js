console.log("working");
const gameCanvas = document.getElementById("gameCanvas");
const gameContext = gameCanvas.getContext("2d");
let frames = 0;
let interval;
let level = 1;
let keys = true;
let player1 = true;

document.getElementById("gameBoard").style.display = "none";
// document.getElementById("matrix").style.display = "none";

document.getElementById("startButton1P").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";

  clearInterval(interval);
  startGame1P();
  updateTimer();
  setTimeout(endGame, 90000);
};

document.getElementById("startButton2P").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";

  clearInterval(interval);
  startGame2P();
  updateTimer();
  setTimeout(endGame, 90000);
};

function updateTimer() {
  let seconds = 90;
  document.getElementById("timer").innerText = seconds--;
  interval = setInterval(function () {
    document.getElementById("timer").innerText = seconds--;
  }, 1000);
}

let currentGame;

function startGame1P() {
  currentGame = new Game();
  bensoundElevatorBossaNova.play();
  currentGame.player1 = new Player1(487);
  currentGame.player1.draw();
  currentGame.teacher1 = new Teacher1();
  currentGame.teacher1.draw();
  setTimeout(function(){teacherTalk(1)}, 1500);
  setTimeout(function(){teacherTalk(2)}, 3000);
  setTimeout(function(){teacherTalk(3)}, 5500);
  cancelAnimationFrame(currentGame.animationId);
  updateCanvas1P();
}

function startGame2P() {
  currentGame = new Game();
  bensoundElevatorBossaNova.play();
  player1 = false;
  currentGame.player1 = new Player1(743);
  currentGame.player2 = new Player2(231);
  currentGame.player1.draw();
  currentGame.player2.draw();
  currentGame.teacher1 = new Teacher1();
  setTimeout(function(){teacherTalk(1)}, 1500);
  setTimeout(function(){teacherTalk(2)}, 3000);
  setTimeout(function(){teacherTalk(3)}, 5500);
  currentGame.teacher1.draw();
  cancelAnimationFrame(currentGame.animationId);
  updateCanvas2P();
}

function updateCanvas1P() {
  frames++
  gameContext.clearRect(0, 0, gameCanvas.clientWidth, gameCanvas.clientHeight);
  currentGame.player1.draw();
  drawComponents();
  drawCoffee();
  drawBeer();
  teacherAdvice()
  currentGame.teacher1.draw();
  currentGame.animationId = requestAnimationFrame(updateCanvas1P);
}

function updateCanvas2P() {
  gameContext.clearRect(0, 0, gameCanvas.clientWidth, gameCanvas.clientHeight);
  currentGame.player1.draw();
  currentGame.player2.draw();
  drawComponents();
  drawCoffee();
  drawBeer();
  teacherAdvice()
  currentGame.teacher1.draw();
  currentGame.animationId = requestAnimationFrame(updateCanvas2P);
}

document.addEventListener("keydown", (e) => {
  currentGame.player1.movePlayer(e.key);
});

document.addEventListener("keydown", (e) => {
  if (currentGame.player2.movePlayer !== undefined) {
    currentGame.player2.movePlayer(e.key);
  }
});


function endGame() {
  bensoundElevatorBossaNova.pause();
  document.getElementById("score").innerText = 0;
  document.getElementById("gameBoard").style.display = "none";
  cancelAnimationFrame(currentGame.animationId);
  alert(`Score: ${currentGame.score}`);
  document.getElementById("gameIntro").style.display = "flex";
}
