console.log("working");

class Extra extends Components {
    constructor(x, y, width, height, source, speed) {
        super(x, y, width, height, null, source, speed);
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

    middleX(){
        return this.x + (this.width / 2);
    }
  }