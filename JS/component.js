console.log("working");
class Components {
    constructor(x, y, width, height, score, /*source*/) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.score = score;
     // this.source = source;
    }
  
    draw() {
       //const image = new Image();
       //image.src = this.source;
       //context.drawImage(image, this.x, this.y, this.width, this.height);
      gameContext.fillStyle = "green";
      gameContext.fillRect(this.x, this.y, this.width, this.height);
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


class HTML extends Components {
  constructor()
}