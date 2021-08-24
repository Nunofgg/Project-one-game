console.log("working");
const gameCanvas = document.getElementById("gameCanvas");
const gameContext = gameCanvas.getContext("2d");

let interval;

document.getElementById("gameBoard").style.display = "none";

document.getElementById("startButton1P").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";
 
  clearInterval(interval);
  startGame1P();
  updateTimer();
  setTimeout(endGame, 30000);
};

document.getElementById("startButton2P").onclick = () => {
  document.getElementById("gameBoard").style.display = "block";
  document.getElementById("gameIntro").style.display = "none";
 
  clearInterval(interval);
  startGame2P();
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

function startGame1P() {
  currentGame = new Game();
  currentGame.player1 = new Player1(487);
  currentGame.player1.draw();
  cancelAnimationFrame(currentGame.animationId);
  updateCanvas1P();
}

function startGame2P() {
  currentGame = new Game();
  currentGame.player1 = new Player1(743);
  currentGame.player2 = new Player2(231);
  currentGame.player1.draw();
  currentGame.player2.draw();
  cancelAnimationFrame(currentGame.animationId);
  updateCanvas2P();
}

function drawComponents() {
  currentGame.componentsFrequency++;
  if (currentGame.componentsFrequency % 200 === 0) {
    const randomComponentX = Math.floor(Math.random() * 999);
    const randomComponentY = 0;
    const randomComponentWidth = 25;
    const randomComponentHeight = 25;

    const newComponentHTML = new Components(
      randomComponentX,
      randomComponentY,
      randomComponentWidth,
      randomComponentHeight,
      1,
      "yellow",
      0.5
    );

    currentGame.components.push(newComponentHTML);
  }

  if (currentGame.componentsFrequency % 550 === 0) {
    const randomComponentX = Math.floor(Math.random() * 999);
    const randomComponentY = 0;
    const randomComponentWidth = 25;
    const randomComponentHeight = 25;

    const newComponentCSS = new Components(
      randomComponentX,
      randomComponentY,
      randomComponentWidth,
      randomComponentHeight,
      2,
      "orange",
      1
    );

    currentGame.components.push(newComponentCSS);
  }

  if (currentGame.componentsFrequency % 950 === 0) {
    const randomComponentX = Math.floor(Math.random() * 999);
    const randomComponentY = 0;
    const randomComponentWidth = 25;
    const randomComponentHeight = 25;

    const newComponentJS = new Components(
      randomComponentX,
      randomComponentY,
      randomComponentWidth,
      randomComponentHeight,
      3,
      "red",
      2.5
    );

    currentGame.components.push(newComponentJS);
  }

  currentGame.components.forEach((component, index) => {
    component.y += component.speed;
    component.draw();

    if (
      currentGame.player1.bottom() === component.bottom() &&
      currentGame.player1.left() <= component.middleX() &&
      currentGame.player1.right() >= component.middleX()
    ) {
      currentGame.score += component.score;
      document.getElementById("score").innerText = currentGame.score;
      currentGame.components.splice(index, 1);
    }
    else if (currentGame.player2.bottom !== undefined && (
      currentGame.player2.bottom() === component.bottom() &&
      currentGame.player2.left() <= component.middleX() &&
      currentGame.player2.right() >= component.middleX()
    )) {
      currentGame.score += component.score;
      document.getElementById("score").innerText = currentGame.score;
      currentGame.components.splice(index, 1);
    } 
    else if (component.top() > gameCanvas.clientHeight) {
      currentGame.score -= 1;
      document.getElementById("score").innerText = currentGame.score;
      currentGame.components.splice(index, 1);
    }
  });
}

function updateCanvas1P() {
  gameContext.clearRect(0, 0, gameCanvas.clientWidth, gameCanvas.clientHeight);
  currentGame.player1.draw();
  drawComponents();
  currentGame.animationId = requestAnimationFrame(updateCanvas1P);
  //checkGameOver();
}

function updateCanvas2P() {
  gameContext.clearRect(0, 0, gameCanvas.clientWidth, gameCanvas.clientHeight);
  currentGame.player1.draw();
  currentGame.player2.draw();
  drawComponents();
  currentGame.animationId = requestAnimationFrame(updateCanvas2P);
  //checkGameOver();
}

document.addEventListener("keydown", (e) => {
  currentGame.player1.movePlayer(e.key);
});

document.addEventListener("keydown", (e) => {
  if (currentGame.player2.movePlayer !== undefined) {
    currentGame.player2.movePlayer(e.key);
  }
  
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