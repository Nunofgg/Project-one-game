console.log("working");

  function drawBeer() {
    if (currentGame.beer.length === 0 && document.getElementById("timer").innerText === "60") {
      const randomComponentX = Math.floor(Math.random() * 999);
      const randomComponentY = 0;
      const randomComponentWidth = 60;
      const randomComponentHeight = 60;
  
      const newBeer = new Extra(
        randomComponentX,
        randomComponentY,
        randomComponentWidth,
        randomComponentHeight,
        ["images/Beer-icon.png", "images/Beer-icon.png"],
        0.5
      );
  
      currentGame.beer.push(newBeer);
    }
  
    currentGame.beer.forEach((beer, index) => {
      beer.y += beer.speed;
      beer.draw();
  
      if (
        currentGame.player1.bottom() === beer.bottom() &&
        currentGame.player1.left() <= beer.middleX() &&
        currentGame.player1.right() >= beer.middleX()
      ) {
        level = 1;
        keys = false;
        currentGame.beer.splice(index, 1);
      } else if (
        currentGame.player2.bottom !== undefined &&
        currentGame.player2.bottom() === beer.bottom() &&
        currentGame.player2.left() <= beer.middleX() &&
        currentGame.player2.right() >= beer.middleX()
      ) {
        level = 1;
        keys = false;
        currentGame.beer.splice(index, 1);
      } else if (beer.top() > gameCanvas.clientHeight) {
        currentGame.beer.splice(index, 1);
      }
    });
  }