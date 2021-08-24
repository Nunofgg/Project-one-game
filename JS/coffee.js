console.log("working");
class Coffee extends Components {
    constructor(x, y, width, height, speed, /*source*/) {
        super(x, y, width, height, speed)
     // this.source = source;
    }
  
    draw() {
       //const image = new Image();
       //image.src = this.source;
       //context.drawImage(image, this.x, this.y, this.width, this.height);
      gameContext.fillStyle = "brown";
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