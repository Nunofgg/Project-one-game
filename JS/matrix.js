console.log("working");

  function drawMatrix() {
    if (currentGame.matrix.length === 0 && document.getElementById("timer").innerText === "87") {
      const randomComponentX = Math.floor(Math.random() * 999);
      const randomComponentY = 0;
      const randomComponentWidth = 25;
      const randomComponentHeight = 25;
  
      const newMatrix = new Extra(
        randomComponentX,
        randomComponentY,
        randomComponentWidth,
        randomComponentHeight,
        "purple",
        0.5
      );
  
      currentGame.matrix.push(newMatrix);
    }
  
    currentGame.matrix.forEach((matrix, index) => {
      matrix.y += matrix.speed;
      matrix.draw();
  
      if (
        currentGame.player1.bottom() === matrix.bottom() &&
        currentGame.player1.left() <= matrix.middleX() &&
        currentGame.player1.right() >= matrix.middleX()
      ) {
        // document.getElementById("gameBoard").style.display = "none";
        // document.getElementById("matrixCanvas").style.display = "block";
        currentGame.matrix.splice(index, 1);
      } else if (
        currentGame.player2.bottom !== undefined &&
        currentGame.player2.bottom() === matrix.bottom() &&
        currentGame.player2.left() <= matrix.middleX() &&
        currentGame.player2.right() >= matrix.middleX()
      ) {
        currentGame.matrix.splice(index, 1);
      } else if (matrix.top() > gameCanvas.clientHeight) {
        currentGame.matrix.splice(index, 1);
      }
    });
  }