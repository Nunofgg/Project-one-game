console.log("working");
class Components {
    constructor(x, y, width, height, score, source, speed) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.score = score;
      this.source = source;
      this.speed = speed;
    }
  
    draw() {
      const image = new Image();
      image.src = this.source;
      gameContext.drawImage(image, this.x, this.y, this.width, this.height);
    }
  
    top() {
      return this.y;
    }
  
    bottom() {
      return this.y + this.height;
    }
  
    left() {
      return this.x;
    }
  
    right() {
      return this.x + this.width;
    }

    middleX(){
        return this.x + (this.width / 2);
    }
  }

  function drawComponents() {
    currentGame.componentsFrequency++;
    if (currentGame.componentsFrequency % 200 === 0) {
      const randomComponentX = Math.floor(Math.random() * 999);
      const randomComponentY = 0;
      const randomComponentWidth = 50;
      const randomComponentHeight = 70;

      const newComponentHTML = new Components(
        randomComponentX,
        randomComponentY,
        randomComponentWidth,
        randomComponentHeight,
        1,
        "images/html-icon2.png",
        0.5
      );
  
      currentGame.components.push(newComponentHTML);
    }
  
    if (currentGame.componentsFrequency % 550 === 0) {
      const randomComponentX = Math.floor(Math.random() * 999);
      const randomComponentY = 0;
      const randomComponentWidth = 50;
      const randomComponentHeight = 70;
  
      const newComponentCSS = new Components(
        randomComponentX,
        randomComponentY,
        randomComponentWidth,
        randomComponentHeight,
        2,
        "images/css-icon2.png",
        1
      );
  
      currentGame.components.push(newComponentCSS);
    }
  
    if (currentGame.componentsFrequency % 950 === 0) {
      const randomComponentX = Math.floor(Math.random() * 999);
      const randomComponentY = 0;
      const randomComponentWidth = 50;
      const randomComponentHeight = 70;
  
      const newComponentJS = new Components(
        randomComponentX,
        randomComponentY,
        randomComponentWidth,
        randomComponentHeight,
        3,
        ["images/js-icon2.png"],
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
      } else if (
        currentGame.player2.bottom !== undefined &&
        currentGame.player2.bottom() === component.bottom() &&
        currentGame.player2.left() <= component.middleX() &&
        currentGame.player2.right() >= component.middleX()
      ) {
        currentGame.score += component.score;
        document.getElementById("score").innerText = currentGame.score;
        currentGame.components.splice(index, 1);
      } else if (component.top() > gameCanvas.clientHeight) {
        // currentGame.score -= 1;
        // document.getElementById("score").innerText = currentGame.score;
        currentGame.components.splice(index, 1);
      }
    });
  }
