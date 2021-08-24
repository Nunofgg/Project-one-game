console.log("working");

class Extra extends Components {
    constructor(x, y, width, height, colour, speed /*source*/) {
        super(x, y, width, height, null, colour, speed);
     // this.source = source;
    }
  
    draw() {
       //const image = new Image();
       //image.src = this.source;
       //context.drawImage(image, this.x, this.y, this.width, this.height);
      gameContext.fillStyle = this.colour;
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