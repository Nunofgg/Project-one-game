console.log("working");
class Teacher1 {
    constructor(){
        this.width = 50;
        this.height = 50;
        this.x = 487;
        this.y = 50;
    }
    draw(){
        //const image = new Image();
        //image.src = "images/miguel.png";
        //context.drawImage(image, this.x, this.y, this.width, this.height);
        gameContext.fillStyle = "white";
        gameContext.fillRect(this.x, this.y, this.width, this.height);
    }
}