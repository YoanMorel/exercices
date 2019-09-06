// Exercice 1
// let myImage = document.querySelector('img');
//
// myImage.addEventListener('mouseover', function() {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'assets/img/image1.jpg') {
//       myImage.setAttribute('src', 'assets/img/image1_2.jpg');
//     }
// });

// Exercice 2
// let myInput = document.querySelector('input');
//
// myInput.addEventListener('blur', function() {
//   alert('Merci de votre participation');
// });

// Exercice 3
// let targetInput = document.querySelector('input');
//
// targetInput.addEventListener('keyup', function () {
//   let myInput = document.getElementById('lastname').value;
//   alert(myInput);
// });

// Exercice 4
// let btnRaz = document.querySelector('button');
//
// btnRaz.addEventListener('click', function() {
//   document.getElementById('input').value = '';
//   document.getElementById('firstname').value = '';
//   document.getElementById('city').value = '';
// });

// Exercice 5

// PARTIE BOUCLE
// var myImg = document.getElementsByTagName('img'); //Var pour boucle FOR
// var myImg = document.querySelectorAll('img'); // Var pour boucle FOREACH
//
// var imgIndex = function(index) {
//   myImg[index].setAttribute('src', 'assets/img/image' + (index + 1) + '_2.jpg');
// }
//
// myImg.forEach(function(img, i){
//   img.addEventListener('mouseover', function(){
//     imgIndex(i);
//   });
// });

// for(let i = 0; i < myImg.length; i++) {
//   let mySrc = myImg[i];
//   mySrc.addEventListener('mouseover', function() {
//     imgIndex(i);
//   });
// }

// PARTIE CHEATEY
function changeImg(img) {
  img.src='assets/img/' + img.id + '_2.jpg';
}

function imgReturn(img) {
  img.src='assets/img/' + img.id + '.jpg';
}
