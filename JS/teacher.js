console.log("working");
class Teacher1 {
    constructor(){
        this.rectWidth = 550;
        this.rectHeight = 500;
        this.rectX = -75;
        this.rectY = 150;
        this.imageWidth = 100;
        this.imageHeight = 100;
        this.imageX = 0;
        this.imageY = 0;
    }
    draw(){
        gameContext.fillStyle = "black";
        gameContext.fillRect(this.rectX, this.rectY, this.rectWidth, this.rectHeight);
        const image = new Image();
        image.src = "images/old-pc.png";
        gameContext.drawImage(image, this.imageX, this.imageY, this.imageWidth, this.imageHeight);
            
    }
}