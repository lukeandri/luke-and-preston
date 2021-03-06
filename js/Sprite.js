class Sprite {
  constructor(data) {
    this.spriteId = data.id;
    this.textBubble = "Hi there";
    this.showBubble = false;
    this.speechTimerMilliseconds = 3000; // milli /1000 = seconds
    this.xPos = data.xPos;
    this.yPos = data.yPos;
    this.width = data.width;
    this.height = data.height;
    this.velocityX = 0;
    this.velocityY = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.url = data.url;
    this.image = new Image();
    this.image.src = data.url;
    sprites[this.spriteId] = this;
    console.log("Sprite made: " + JSON.stringify(this));

    // this.calculateScale(data.width, data.height);
  }

  calculateScale(widthActual, heightActual) {
    //TODO
    // console.log("Real width:" + widthActual + " Real Height: " + heightActual);
  }

  move(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }

  setBubbleSpeech(shouldSpeak) {
    this.showBubble = shouldSpeak;
  }

  setBubbleText(bubbleText) {
    this.textBubble = bubbleText;
  }
}
