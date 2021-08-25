console.log("working");

const imageSrc = ["images/player-Guilherme.png", "images/player-Nuno.png"]
let chooseSrc = imageSrc[Math.floor(Math.random() * 2)]

class Player1 {
    constructor(x){
        this.width = 80;
        this.height = 50;
        this.x = x;
        this.y = 480;
    }
    draw(){
        const image = new Image();
        if (player1 === true) {image.src = chooseSrc}
        else {image.src = imageSrc[0]}
        gameContext.drawImage(image, this.x - 135, 338, 350, 334);
        gameContext.fillStyle = "black";
        gameContext.fillRect(this.x, this.y, this.width, this.height);
    }

    movePlayer(key) {
        gameContext.clearRect(this.x, this.y, this.width, this.height);
        if (keys === true) {
          switch (key) {
            case "ArrowLeft":
              if (this.x > 8) {
                this.x -= 10;
              }
              break;
            case "ArrowRight":
              if (this.x < (gameCanvas.clientWidth - this.width) - 8) {
                this.x += 10;
              }
              break;
          }
        } else if (keys === false) {
          switch (key) {
            case "ArrowRight":
              if (this.x > 8) {
                this.x -= 10;
              }
              break;
            case "ArrowLeft":
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