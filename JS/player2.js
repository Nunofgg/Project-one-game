console.log("working");
class Player2 {
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
        gameContext.fillStyle = "blue";
        gameContext.fillRect(this.x, this.y, this.width, this.height);
    }

    movePlayer(key) {
        gameContext.clearRect(this.x, this.y, this.width, this.height);
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