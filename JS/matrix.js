function drawMatrix() {
    if (currentGame.score >= 1) {
      const matrixX = 500;
      const matrixY = 0;
      const matrixWidth = 25;
      const matrixHeight = 25;
  
      const matrix = new Components(
        matrixX,
        matrixY,
        matrixWidth,
        matrixHeight,
        5,
        "purple",
        2.5
      );


      if (
        currentGame.player1.bottom() === matrix.bottom() &&
        currentGame.player1.left() <= matrix.middleX() &&
        currentGame.player1.right() >= matrix.middleX()
      ) {
        document.getElementById("gameBoard").style.display = "none";
        document.getElementById("matrixCanvas").style.display = "block";
      }
  
      else if (currentGame.player2.bottom !== undefined && (
        currentGame.player2.bottom() === matrix.bottom() &&
        currentGame.player2.left() <= matrix.middleX() &&
        currentGame.player2.right() >= matrix.middleX()
      )) {
        currentGame.score += component.score;
        document.getElementById("score").innerText = currentGame.score;
        currentGame.components.splice(index, 1);
      } 
  
      else if (matrix.top() > gameCanvas.clientHeight) {
        currentGame.score -= 1;
        document.getElementById("score").innerText = currentGame.score;
      }
    }
}
  