console.log("working");

  function drawCoffee() {
    if (currentGame.componentsFrequency % 1200 === 0) {
      const randomComponentX = Math.floor(Math.random() * 964);
      const randomComponentY = 0;
      const randomComponentWidth = 60;
      const randomComponentHeight = 60;
  
      const newCoffee = new Extra(
        randomComponentX,
        randomComponentY,
        randomComponentWidth,
        randomComponentHeight,
        ["images/coffee-icon2.1.png", "images/coffee-icon2.2.png"],
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
        popUp.play();
        teacherTalk(4);
        currentGame.player1.colour = "white";
        setTimeout(function(){ currentGame.player1.colour = "black"; }, 100);
        level = 2;
        keys = true;
        currentGame.coffee.splice(index, 1);
        setTimeout(() => {
          level = 1;
        }, 8000);
      } else if (
        currentGame.player2.bottom !== undefined &&
        currentGame.player2.bottom() === coffee.bottom() &&
        currentGame.player2.left() <= coffee.middleX() &&
        currentGame.player2.right() >= coffee.middleX()
      ) {
        popUp.play();
        teacherTalk(4);
        currentGame.player2.colour = "white";
        setTimeout(function(){ currentGame.player2.colour = "black"; }, 100);
        level = 2;
        keys = true;
        currentGame.coffee.splice(index, 1);
        setTimeout(() => {
          level = 1;
        }, 8000);
      } else if (coffee.top() > gameCanvas.clientHeight) {
        currentGame.coffee.splice(index, 1);
      }
    });
  }
  