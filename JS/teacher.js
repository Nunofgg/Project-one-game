console.log("working");
class Teacher1 {
    constructor(){
        this.width = 200;
        this.height = 100;
        this.x = 487;
        this.y = 50;
    }
    draw(){
        gameContext.fillStyle = "black";
        gameContext.fillRect(this.x, this.y, this.width, this.height);
        const image = new Image();
        image.src = "images/miguel1.png";
        gameContext.drawImage(image, this.x, this.y, this.width, this.height);
    }
}