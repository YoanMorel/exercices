var canvasPart1 = document.getElementById('canvasPart1');
var canvasTX = canvasPart1.getContext('2d');

var canvasPart2 = document.getElementById('canvasPart2');
var canvasTX2 = canvasPart2.getContext('2d');

var canvasPart3 = document.getElementById('canvasPart3');
var canvasTX3 = canvasPart3.getContext('2d');

var x2 = canvasPart2.width;
var y2 = canvasPart2.height;

var x3 = canvasPart3.width;
var y3 = canvasPart3.height;

canvasTX.beginPath();
canvasTX.moveTo(200, 350);
canvasTX.lineTo(150, 200);
canvasTX.lineTo(250, 200);
canvasTX.fillStyle = "darkGoldenRod";
canvasTX.fill();
canvasTX.closePath();
canvasTX.beginPath();
canvasTX.moveTo(150, 200);
canvasTX.bezierCurveTo(150, 200, 225, 100, 250, 200);
canvasTX.fillStyle = "maroon";
canvasTX.fill();
canvasTX.stroke();

// CANVAS PART2

canvasTX2.fillStyle = "blue";
canvasTX2.fillRect(0, 0, x2, y2);
for (var i = 0; i < x2; i++) {
  for (var j = 0; j < y2; j++) {
    var goMakeStars = Math.floor(Math.random() * Math.floor(1000));
    if (goMakeStars == 2) {
      canvasTX2.beginPath();
      canvasTX2.fillStyle = "white";
      canvasTX2.fillRect(i, j, 4, 4);
      canvasTX2.closePath();
    }
  }
}
canvasTX2.beginPath();
canvasTX2.fillStyle = "green";
canvasTX2.fillRect(0, 220, x2, y2 / 2);
canvasTX2.fill();
canvasTX2.beginPath();
canvasTX2.moveTo(50, 400);
canvasTX2.lineTo(200, 200);
canvasTX2.lineTo(350, 400);
canvasTX2.fillStyle = "gray";
canvasTX2.fill();
canvasTX2.beginPath();
canvasTX2.moveTo(200, 200);
canvasTX2.lineTo(125, 350);
canvasTX2.lineTo(275, 350);
canvasTX2.fillStyle = "yellow";
canvasTX2.fill();
canvasTX2.closePath();
canvasTX2.beginPath();
canvasTX2.bezierCurveTo(160, 200, 200, 70, 240, 200);
canvasTX2.fillStyle = "white";
canvasTX2.fill();
canvasTX2.closePath();
canvasTX2.beginPath();
canvasTX2.moveTo(100, y2 / 2);
canvasTX2.quadraticCurveTo(x2 / 2, y2 / 3, 300, y2 / 2);
canvasTX2.moveTo(100, y2 / 2);
canvasTX2.quadraticCurveTo(x2 / 2, y2 / 1.5, 300, y2 / 2);
canvasTX2.fillStyle = "#e0e1f3";
canvasTX2.fill();
canvasTX2.closePath();
// PETIT BISCUIT
canvasTX2.save();
canvasTX2.translate(170, 250);
canvasTX2.scale(0.15, 0.15);
canvasTX2.beginPath();
canvasTX2.arc(200, 100, x3 / 8, 0, Math.PI * 2);
canvasTX2.fillStyle = "darkGoldenRod";
canvasTX2.fill();
canvasTX2.beginPath();
canvasTX2.bezierCurveTo(175, 75, 185, 65, 195, 75);
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.bezierCurveTo(205, 75, 215, 65, 225, 75);
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.arc(185, 90, x3 / 40, 0, Math.PI * 2);
canvasTX2.fillStyle = "white";
canvasTX2.fill();
canvasTX2.beginPath();
canvasTX2.arc(215, 90, x3 / 40, 0, Math.PI * 2);
canvasTX2.fillStyle = "white";
canvasTX2.fill();
canvasTX2.moveTo(180, 120);
canvasTX2.beginPath();
canvasTX2.bezierCurveTo(180, 120, 200, 125, 225, 120);
canvasTX2.strokeStyle = "red";
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.bezierCurveTo(180, 120, 200, 140, 225, 120);
canvasTX2.strokeStyle = "red";
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.moveTo(100, 150);
canvasTX2.lineCap = "round";
canvasTX2.lineWidth = 30;
canvasTX2.lineTo(300, 150);
canvasTX2.strokeStyle = "darkGoldenRod";
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.moveTo(175, 150);
canvasTX2.lineCap = "round";
canvasTX2.lineWidth = 30;
canvasTX2.lineTo(175, 300);
canvasTX2.strokeStyle = "darkGoldenRod";
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.moveTo(225, 150);
canvasTX2.lineCap = "round";
canvasTX2.lineWidth = 30;
canvasTX2.lineTo(225, 300);
canvasTX2.strokeStyle = "darkGoldenRod";
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.moveTo(200, 150);
canvasTX2.lineCap = "square";
canvasTX2.lineWidth = 30;
canvasTX2.lineTo(200, 270);
canvasTX2.strokeStyle = "darkGoldenRod";
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.moveTo(200, 270);
canvasTX2.lineCap = "round";
canvasTX2.lineWidth = 20;
canvasTX2.lineTo(200, 300);
canvasTX2.strokeStyle = "yellow";
canvasTX2.stroke();
canvasTX2.beginPath();
canvasTX2.arc(200, 180, x3 / 64, 0, Math.PI * 2);
canvasTX2.fillStyle = "purple";
canvasTX2.fill();
canvasTX2.beginPath();
canvasTX2.arc(200, 200, x3 / 64, 0, Math.PI * 2);
canvasTX2.fillStyle = "purple";
canvasTX2.fill();
canvasTX2.restore();
// FIN PETIT BISCUIT

// DEBUT CORNETTO
canvasTX2.save();
canvasTX2.translate(200, 250);
canvasTX2.scale(.1, .1)
canvasTX2.beginPath();
canvasTX2.moveTo(200, 350);
canvasTX2.lineTo(150, 200);
canvasTX2.lineTo(250, 200);
canvasTX2.fillStyle = "darkGoldenRod";
canvasTX2.fill();
canvasTX2.closePath();
canvasTX2.beginPath();
canvasTX2.moveTo(150, 200);
canvasTX2.bezierCurveTo(150, 200, 225, 100, 250, 200);
canvasTX2.fillStyle = "maroon";
canvasTX2.fill();
canvasTX2.stroke();
canvasTX2.restore();

// CANVAS PART3

canvasTX3.arc(200, 100, x3 / 8, 0, Math.PI * 2);
canvasTX3.fillStyle = "darkGoldenRod";
canvasTX3.fill();
canvasTX3.beginPath();
canvasTX3.bezierCurveTo(175, 75, 185, 65, 195, 75);
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.bezierCurveTo(205, 75, 215, 65, 225, 75);
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.arc(185, 90, x3 / 40, 0, Math.PI * 2);
canvasTX3.fillStyle = "white";
canvasTX3.fill();
canvasTX3.beginPath();
canvasTX3.arc(215, 90, x3 / 40, 0, Math.PI * 2);
canvasTX3.fillStyle = "white";
canvasTX3.fill();
canvasTX3.moveTo(180, 120);
canvasTX3.beginPath();
canvasTX3.bezierCurveTo(180, 120, 200, 125, 225, 120);
canvasTX3.strokeStyle = "red";
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.bezierCurveTo(180, 120, 200, 140, 225, 120);
canvasTX3.strokeStyle = "red";
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.moveTo(100, 150);
canvasTX3.lineCap = "round";
canvasTX3.lineWidth = 30;
canvasTX3.lineTo(300, 150);
canvasTX3.strokeStyle = "darkGoldenRod";
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.moveTo(175, 150);
canvasTX3.lineCap = "round";
canvasTX3.lineWidth = 30;
canvasTX3.lineTo(175, 300);
canvasTX3.strokeStyle = "darkGoldenRod";
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.moveTo(225, 150);
canvasTX3.lineCap = "round";
canvasTX3.lineWidth = 30;
canvasTX3.lineTo(225, 300);
canvasTX3.strokeStyle = "darkGoldenRod";
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.moveTo(200, 150);
canvasTX3.lineCap = "square";
canvasTX3.lineWidth = 30;
canvasTX3.lineTo(200, 270);
canvasTX3.strokeStyle = "darkGoldenRod";
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.moveTo(200, 270);
canvasTX3.lineCap = "round";
canvasTX3.lineWidth = 20;
canvasTX3.lineTo(200, 300);
canvasTX3.strokeStyle = "white";
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.arc(200, 180, x3 / 64, 0, Math.PI * 2);
canvasTX3.fillStyle = "purple";
canvasTX3.fill();
canvasTX3.beginPath();
canvasTX3.arc(200, 200, x3 / 64, 0, Math.PI * 2);
canvasTX3.fillStyle = "purple";
canvasTX3.fill();
