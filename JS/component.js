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
    
    if (
      this.y < 25 ||
      this.y > 50 && this.y < 75 ||
      this.y > 100 && this.y < 125 ||
      this.y > 150 && this.y < 175 ||
      this.y > 200 && this.y < 225 ||
      this.y > 250 && this.y < 275 ||
      this.y > 300 && this.y < 325 ||
      this.y > 350 && this.y < 375 ||
      this.y > 400 && this.y < 425 ||
      this.y > 450 && this.y < 475 ||
      this.y > 500 && this.y < 525 ||
      this.y > 550 && this.y < 575 ||
      this.y > 600 && this.y < 625
      ){
      image.src = this.source[1];
    } else {
      image.src = this.source[0];
    }

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

  middleX() {
    return this.x + this.width / 2;
  }
}

function drawComponents() {
  currentGame.componentsFrequency++;
  if (currentGame.componentsFrequency % 200 === 0) {
    const randomComponentX = Math.floor(Math.random() * 974);
    const randomComponentY = 0;
    const randomComponentWidth = 50;
    const randomComponentHeight = 70;

    const newComponentHTML = new Components(
      randomComponentX,
      randomComponentY,
      randomComponentWidth,
      randomComponentHeight,
      1,
      ["images/html-icon2.png", "images/html-icon2.1.png"],
      0.5
    );

    currentGame.components.push(newComponentHTML);
  }

  if (currentGame.componentsFrequency % 550 === 0) {
    const randomComponentX = Math.floor(Math.random() * 974);
    const randomComponentY = 0;
    const randomComponentWidth = 50;
    const randomComponentHeight = 70;

    const newComponentCSS = new Components(
      randomComponentX,
      randomComponentY,
      randomComponentWidth,
      randomComponentHeight,
      2,
      ["images/css-icon2.png", "images/css-icon2.1.png"],
      1
    );

    currentGame.components.push(newComponentCSS);
  }

  if (currentGame.componentsFrequency % 950 === 0) {
    const randomComponentX = Math.floor(Math.random() * 974);
    const randomComponentY = 0;
    const randomComponentWidth = 50;
    const randomComponentHeight = 70;

    const newComponentJS = new Components(
      randomComponentX,
      randomComponentY,
      randomComponentWidth,
      randomComponentHeight,
      3,
      ["images/js-icon2.png", "images/js-icon2.1.png"],
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
      popUp.play();
      currentGame.player1.colour = "white";
      setTimeout(function(){ currentGame.player1.colour = "black"; }, 100);
      currentGame.score += component.score;
      updateScore();
      currentGame.components.splice(index, 1);
    } else if (
      currentGame.player2.bottom !== undefined &&
      currentGame.player2.bottom() === component.bottom() &&
      currentGame.player2.left() <= component.middleX() &&
      currentGame.player2.right() >= component.middleX()
    ) {
      popUp.play();
      currentGame.player2.colour = "white";
      setTimeout(function(){ currentGame.player2.colour = "black"; }, 100);
      currentGame.score += component.score;
      updateScore();
      currentGame.components.splice(index, 1);
    } else if (component.top() > gameCanvas.clientHeight) {
      currentGame.components.splice(index, 1);
    }
  });
}

function updateScore() {
  if (currentGame.score < 10) {
    document.getElementById("score").innerText = "0" + currentGame.score;
  } else {
    document.getElementById("score").innerText = currentGame.score;
  }
}