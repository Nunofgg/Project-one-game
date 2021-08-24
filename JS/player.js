console.log("working");
class Player1 {
    constructor(x){
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = 550;
    }
    draw(){
        //const image = new Image();
        //image.src = "";
        //context.drawImage(image, this.x, this.y, this.width, this.height);
        gameContext.fillStyle = "green";
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