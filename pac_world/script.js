
$(document).ready(function(){
  console.log("all eyes on me");

  let pac = {};

  pac.x = 20;
  pac.y = 5;

  $(document).on('keydown', handleTyping);
  function handleTyping(event){
    console.log(event.which);
    switch(event.which){
      case 39:
        $('#pac').css({
          'left': (pac.x += 10) + 'px'
        });
        break;
      case 40:
          $('#pac').css({
            'top': (pac.y += 10) + 'px'
          });
        break;
        case 37:
          $('#pac').css({
          'left': (pac.x -= 10) + 'px'
          });
        break;
        case 38:
          $('#pac').css({
          'top': (pac.y -= 10) + 'px'
          });
        break;
    }
  }
})

// let ctx = null;
//     let gameMap = [
//         0, 0, 0, 0, 0,
//         0, 1, 1, 1, 0,
//         0, 1, 0, 0, 0,
//         0, 1, 1, 1, 0,
//         0, 0, 0, 0, 0
//     ];
//     let tileW = 40, tileH = 40;
//     let mapW = 5, mapH = 5;
//     let currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;
//
//     new tile
//     let keysDown = {
//         37: false,
//         38: false,
//         39: false,
//         40: false
//     };
//     let player = new Character();
//     function Character() {
//         this.tileFrom = [1, 1];
//         this.tileTo = [1, 1];
//         this.timeMoved = 0;
//         this.dimensions = [30, 30];
//         this.position = [45, 45];
//         this.delayMove = 700;
//     }
//     Character.prototype.placeAt = function (x, y) {
//         this.tileFrom = [x, y];
//         this.tileTo = [x, y];
//         this.position = [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
//         ((tileH * y) + ((tileH - this.dimensions[1]) / 2))];
//     };
//     Character.prototype.processMovement = function (t) {
//         if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false; }
//         if ((t - this.timeMoved) >= this.delayMove) {
//             this.placeAt(this.tileTo[0], this.tileTo[1]);
//         }
//         else {
//             this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2);
//             this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2);
//             if (this.tileTo[0] != this.tileFrom[0]) {
//                 var diff = (tileW / this.delayMove) * (t - this.timeMoved);
//                 this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff);
//             }
//             if (this.tileTo[1] != this.tileFrom[1]) {
//                 var diff = (tileH / this.delayMove) * (t - this.timeMoved);
//                 this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
//             }
//             this.position[0] = Math.round(this.position[0]);
//             this.position[1] = Math.round(this.position[1]);
//         }
//         return true;
//     }
//     function toIndex(x, y) {
//         return ((y * mapW) + x);
//     }
//     window.onload = function () {
//         ctx = document.getElementById('game').getContext("2d");
//         requestAnimationFrame(drawGame);
//         ctx.font = "bold 10pt sans-serif";
//         window.addEventListener("keydown", function (e) {
//             if (e.keyCode >= 37 && e.keyCode <= 40) { keysDown[e.keyCode] = true; }
//         });
//         window.addEventListener("keyup", function (e) {
//             if (e.keyCode >= 37 && e.keyCode <= 40) { keysDown[e.keyCode] = false; }
//         });
//     };
//     function drawGame() {
//         if (ctx == null) { return; }
//         let currentFrameTime = Date.now();
//         let timeElapsed = currentFrameTime - lastFrameTime;
//         let sec = Math.floor(Date.now() / 1000);
//         if (sec != currentSecond) {
//             currentSecond = sec;
//             framesLastSecond = frameCount;
//             frameCount = 1;
//         }
//         else { frameCount++; }
//         if (!player.processMovement(currentFrameTime)) {
//             if (keysDown[38] && player.tileFrom[1] > 0 && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 1) { player.tileTo[1] -= 1; }
//             else if (keysDown[40] && player.tileFrom[1] < (mapH - 1) && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)] == 1) { player.tileTo[1] += 1; }
//             else if (keysDown[37] && player.tileFrom[0] > 0 && gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])] == 1) { player.tileTo[0] -= 1; }
//             else if (keysDown[39] && player.tileFrom[0] < (mapW - 1) && gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])] == 1) { player.tileTo[0] += 1; }
//             if (player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]) { player.timeMoved = currentFrameTime; }
//         }
//         for (let y = 0; y < mapH; ++y) {
//             for (let x = 0; x < mapW; ++x) {
//                 switch (gameMap[((y * mapW) + x)]) {
//                     case 0:
//                         ctx.fillStyle = "#685b48";
//                         break;
//                     default:
//                         ctx.fillStyle = "#5aa457";
//                 }
//                 ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
//             }
//         }
//         ctx.fillStyle = "#0000ff";
//         ctx.fillRect(player.position[0], player.position[1],
//             player.dimensions[0], player.dimensions[1]);
//         ctx.fillStyle = "#ff0000";
//         ctx.fillText("FPS: " + framesLastSecond, 10, 20);
//         lastFrameTime = currentFrameTime;
//         requestAnimationFrame(drawGame);
//     }




// let myGamePiece;
//
// function startGame() {
//     myGamePiece = new component(40, 40, "images/tupacman.png", 10, 120, "image");
//     myGameArea.start();
// }
//
// let myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
//         },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     },
//     stop : function() {
//         clearInterval(this.interval);
//     }
// }
//
// function component(width, height, color, x, y, type) {
//     this.type = type;
//     if (type == "image") {
//         this.image = new Image();
//         this.image.src = color;
//     }
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;
//     this.update = function() {
//         ctx = myGameArea.context;
//         if (type == "image") {
//             ctx.drawImage(this.image,
//                 this.x,
//                 this.y,
//                 this.width, this.height);
//         } else {
//             ctx.fillStyle = color;
//             ctx.fillRect(this.x, this.y, this.width, this.height);
//         }
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//     }
// }
//
// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.newPos();
//     myGamePiece.update();
// }
//
// function moveup() {
//     myGamePiece.speedY = -1;
// }
//
// function movedown() {
//     myGamePiece.speedY = 1;
// }
//
// function moveleft() {
//     myGamePiece.speedX = -1;
// }
//
// function moveright() {
//     myGamePiece.speedX = 1;
// }
//
// function clearmove() {
//     myGamePiece.speedX = 0;
//     myGamePiece.speedY = 0;
// }
