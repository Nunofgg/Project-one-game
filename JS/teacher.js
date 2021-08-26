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
        this.teacherY = 100;
        this.teacherImg = "images/miguel1.png";
    }
    draw(){
        // gameContext.fillStyle = "black";
        // gameContext.fillRect(this.rectX, this.rectY, this.rectWidth, this.rectHeight);
        // const frame = new Image();
        // frame.src = "images/old-pc.png";
        // gameContext.drawImage(frame, this.imageX, this.imageY, this.imageWidth, this.imageHeight);
        const teacher = new Image();
        teacher.src = this.teacherImg;
        gameContext.drawImage(teacher, this.teacherX, this.teacherY, this.teacherWidth, this.teacherHeight);
    }

    // teacherTalk () {
    //     this.teacherImg = "images/miguel-boca.png";
    //     setTimeout(function(){ this.teacherImg = "images/miguel1.png"; }, 100);
    //     setTimeout(function(){ this.teacherImg = "images/miguel-boca.png"; }, 200);
    //     setTimeout(function(){ this.teacherImg = "images/miguel1.png"; }, 300);
    //     setTimeout(function(){ this.teacherImg = "images/miguel-boca.png"; }, 400);
    //     setTimeout(function(){ this.teacherImg = "images/miguel1.png"; }, 500);
    // }
}

function teacherTalk(index) {
    let speachesText = ['','"Hello world!"','"Welcome to The Bootcamp_!"','"Try to keep up if you can!"', '"Coffee break!"', '"Happy hour!"', '"Don`t forget to save!"', '"Google it!"'];
    let speachesAudio = [0, helloworld ,welcometoTheBootcamp ,trytokeepupifyoucan, coffeebreak, happyhour, dontforgettosave, googleit];
    document.getElementById("speach").innerText = speachesText[index];
    speachesAudio[index].play();
    setTimeout(function(){ document.getElementById("speach").innerText = speachesText[0]; }, 1000);
    currentGame.teacher1.teacherImg = "images/miguel-boca.png";
    setTimeout(function(){ thicurrentGame.teacher1.teacherImg = "images/miguel1.png"; }, 100);
    setTimeout(function(){ currentGame.teacher1.teacherImg = "images/miguel-boca.png"; }, 200);
    setTimeout(function(){ currentGame.teacher1.teacherImg = "images/miguel1.png"; }, 300);
    setTimeout(function(){ currentGame.teacher1.teacherImg = "images/miguel-boca.png"; }, 400);
    setTimeout(function(){ currentGame.teacher1.teacherImg = "images/miguel1.png"; }, 500);
    setTimeout(function(){ currentGame.teacher1.teacherImg = "images/miguel-boca.png"; }, 600);
    setTimeout(function(){ currentGame.teacher1.teacherImg = "images/miguel1.png"; }, 700);
}

function teacherAdvice() {
    if (currentGame.componentsFrequency % 1500 === 0) {
        teacherTalk(6)
    } else if (currentGame.componentsFrequency % 2400 === 0) {
        teacherTalk(7)
    }
}