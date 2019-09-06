var canvasPart1 = document.getElementById('canvasPart1');
var canvasTX = canvasPart1.getContext('2d');

var canvasPart2 = document.getElementById('canvasPart2');
var canvasTX2 = canvasPart2.getContext('2d');

var canvasPart3 = document.getElementById('canvasPart3');
var canvasTX3 = canvasPart3.getContext('2d');

var x = canvasPart3.width;
var y = canvasPart3.height;

canvasTX.beginPath();
canvasTX.moveTo(50, 100); // (x,y)
canvasTX.lineTo(300, 100);
canvasTX.lineTo(175, 0);
canvasTX.lineTo(50, 100);
canvasTX.moveTo(235, 50);
canvasTX.lineTo(235, 0);
canvasTX.lineTo(285, 0);
canvasTX.lineTo(285, 90);
canvasTX.fillStyle = "DarkGray";
canvasTX.fill();
canvasTX.closePath();
canvasTX.beginPath();
canvasTX.moveTo(50, 100);
canvasTX.lineTo(50, 400);
canvasTX.lineTo(300, 400);
canvasTX.lineTo(300, 100);
canvasTX.fillStyle = "bisque";
canvasTX.fill();
canvasTX.closePath();
canvasTX.beginPath();
canvasTX.moveTo(75, 125);
canvasTX.lineTo(125, 125);
canvasTX.lineTo(125, 175);
canvasTX.lineTo(75, 175);
canvasTX.fillStyle = "white";
canvasTX.fill();
canvasTX.closePath();
canvasTX.stroke();
canvasTX.beginPath();
canvasTX.moveTo(225, 125);
canvasTX.lineTo(275, 125);
canvasTX.lineTo(275, 175);
canvasTX.lineTo(225, 175);
canvasTX.fillStyle = "white";
canvasTX.fill();
canvasTX.closePath();
canvasTX.stroke();
canvasTX.beginPath();
canvasTX.moveTo(150, 300);
canvasTX.lineTo(200, 300);
canvasTX.lineTo(200, 400);
canvasTX.lineTo(150, 400);
canvasTX.fillStyle = "black";
canvasTX.fill();
canvasTX.closePath();
canvasTX.stroke();

// CANVAS PART2

canvasTX2.save();
canvasTX2.translate(200,26);
canvasTX2.rotate(Math.PI / 180 * 45);
canvasTX2.scale(0.7,0.7);
canvasTX2.fillStyle = 'black';
canvasTX2.fillRect(0, 0, 250, 250);
canvasTX2.restore();
canvasTX2.fillStyle = "bisque";
canvasTX2.fillRect(75, 150, 250, 250);

// CANVAS PART3

canvasTX3.translate(50,50);
canvasTX3.fillStyle = "green";
canvasTX3.fillRect(0,0,300,150);
canvasTX3.clearRect(0,0,50,75);
canvasTX3.clearRect(250,0,50,75);
canvasTX3.arc(25, 200, x/8, 0, Math.PI*2);
canvasTX3.fillStyle = "#cdcdcd";
canvasTX3.fill();
canvasTX3.stroke();
canvasTX3.beginPath();
canvasTX3.arc(275, 200, x/8, 0, Math.PI*2);
canvasTX3.fillStyle = "#cdcdcd";
canvasTX3.fill();
canvasTX3.stroke();
