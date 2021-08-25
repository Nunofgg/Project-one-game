console.log("working");
class Player2 {
    constructor(x){
        this.width = 80;
        this.height = 50;
        this.x = x;
        this.y = 480;
    }

    draw(){
      const image = new Image();
      image.src = "images/player-Nuno.png";
      gameContext.drawImage(image, this.x - 135, 338, 350, 334);
      gameContext.fillStyle = "black";
      gameContext.fillRect(this.x, this.y, this.width, this.height);
  }

    movePlayer(key) {
        gameContext.clearRect(this.x, this.y, this.width, this.height);
        if (keys === true) {
            switch (key) {
              case "a":
                if (this.x > 8) {
                  this.x -= 10;
                }
                break;
              case "d":
                if (this.x < (gameCanvas.clientWidth - this.width) - 8) {
                  this.x += 10;
                }
                break;
            }
          } else if (keys === false) {
            switch (key) {
              case "d":
                if (this.x > 8) {
                  this.x -= 10;
                }
                break;
              case "a":
                if (this.x < (gameCanvas.clientWidth - this.width) - 8) {
                  this.x += 10;
                }
                break;
            }
          }
      }

    top(){
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
}