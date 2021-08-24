console.log("working");

  function drawCoffee() {
    if (currentGame.coffee.length === 0 && document.getElementById("timer").innerText === "85") {
      const randomComponentX = Math.floor(Math.random() * 999);
      const randomComponentY = 0;
      const randomComponentWidth = 25;
      const randomComponentHeight = 25;
  
      const newCoffee = new Extra(
        randomComponentX,
        randomComponentY,
        randomComponentWidth,
        randomComponentHeight,
        "purple",
        0.5
      );
  
      currentGame.coffee.push(newCoffee);
    }
  
    currentGame.coffee.forEach((coffee, index) => {
      coffee.y += coffee.speed;
      coffee.draw();
  
      if (
        currentGame.player1.bottom() === coffee.bottom() &&
        currentGame.player1.left() <= coffee.middleX() &&
        currentGame.player1.right() >= coffee.middleX()
      ) {
        level = 2;
        keys = true;
        currentGame.coffee.splice(index, 1);
      } else if (
        currentGame.player2.bottom !== undefined &&
        currentGame.player2.bottom() === coffee.bottom() &&
        currentGame.player2.left() <= coffee.middleX() &&
        currentGame.player2.right() >= coffee.middleX()
      ) {
        level = 2;
        keys = true;
        currentGame.coffee.splice(index, 1);
      } else if (coffee.top() > gameCanvas.clientHeight) {
        currentGame.coffee.splice(index, 1);
      }
    });
  }
  