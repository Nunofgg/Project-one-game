console.log("working");

class Extra extends Components {
    constructor(x, y, width, height, source, speed) {
        super(x, y, width, height, null, source, speed);
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