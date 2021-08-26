console.log("working");
class Teacher1 {
    constructor(){
        this.rectWidth = 370;
        this.rectHeight = 260;
        this.rectX = 327;
        this.rectY = 75;
        this.imageWidth = 600;
        this.imageHeight = 500;
        this.imageX = 212;
        this.imageY = -50;
        this.teacherWidth = 190;
        this.teacherHeight = 180;
        this.teacherX = 417;
        this.teacherY = 90;
        this.teacherImg = ["images/miguel1.png", "images/miguel-boca.png"];
    }
    draw(){
        gameContext.fillStyle = "black";
        gameContext.fillRect(this.rectX, this.rectY, this.rectWidth, this.rectHeight);
        const frame = new Image();
        frame.src = "images/old-pc.png";
        gameContext.drawImage(frame, this.imageX, this.imageY, this.imageWidth, this.imageHeight);
        const teacher = new Image();
        teacher.src = this.teacherImg[0];
        gameContext.drawImage(teacher, this.teacherX, this.teacherY, this.teacherWidth, this.teacherHeight);
    }

    teacherTalk () {
        
    }
}

