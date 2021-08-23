console.log("working");
const gameCanvas = document.getElementById("gameCanvas");
const gameContext = gameCanvas.getContext("2d");

let interval;
document.getElementById("gameBoard").style.display = "none";
document.getElementById("startButton").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";
 
  clearInterval(interval);
  startGame();
  updateTimer();
  setTimeout(endGame, 30000);
};

function updateTimer(){
    let seconds = 30;
    document.getElementById("timer").innerText = seconds--;
    interval = setInterval(function() {
    document.getElementById("timer").innerText = seconds--;
    }, 1000);
}

let currentGame;

function startGame() {
  currentGame = new Game();
  currentGame.player = new Player();
  currentGame.player.draw();
  cancelAnimationFrame(currentGame.animationId);
  updateCanvas();
}

function drawComponents() {
  currentGame.componentsFrequency++;
  if (currentGame.componentsFrequency % 100 === 1) {
    const randomComponentX = Math.floor(Math.random() * 999);
    const randomComponentY = 0;
    const randomComponentWidth = 25;
    const randomComponentHeight = 25;

    const newComponentHTML = new Components(
      randomComponentX,
      randomComponentY,
      randomComponentWidth,
      randomComponentHeight,
      1
    );

    currentGame.components.push(newComponentHTML);
  }

  currentGame.components.forEach((component, index) => {
    component.y += 2.5;
    component.draw();

    if (
      currentGame.player.bottom() === component.bottom() &&
      currentGame.player.left() <= component.middleX() &&
      currentGame.player.right() >= component.middleX()
    ) {
      currentGame.score += component.score;
      document.getElementById("score").innerText = currentGame.score;
      currentGame.components.splice(index, 1);
    } 
    else if (component.top() > gameCanvas.clientHeight) {
      currentGame.score -= component.score;
      document.getElementById("score").innerText = currentGame.score;
      currentGame.components.splice(index, 1);
    }
  });
}

function updateCanvas() {
  gameContext.clearRect(0, 0, gameCanvas.clientWidth, gameCanvas.clientHeight);
  currentGame.player.draw();
  drawComponents();
  currentGame.animationId = requestAnimationFrame(updateCanvas);
  checkGameOver();
}

document.addEventListener("keydown", (e) => {
  currentGame.player.movePlayer(e.key);
});


function checkGameOver(){
    if(currentGame.score < 0){
        document.getElementById("score").innerText = 0;
        document.getElementById("gameBoard").style.display = "none";
        cancelAnimationFrame(currentGame.animationId);
        alert("Game Over");
        document.getElementById("gameIntro").style.display = "flex";
    }
}

function endGame(){
    document.getElementById("score").innerText = 0;
    document.getElementById("gameBoard").style.display = "none";
    cancelAnimationFrame(currentGame.animationId);
    alert(`Score: ${currentGame.score}`);
    document.getElementById("gameIntro").style.display = "flex";
}