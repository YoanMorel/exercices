// Exercice 1
// function imgBorder(img) {
//   img.setAttribute('style', 'border: 3px solid red;');
// }
//
// function returnImg(img) {
//   img.setAttribute('style', 'border: none;');
// }

// Exercice 2
// var divId = document.getElementById('text');
//
// function hideText() {
//   divId.setAttribute('style', 'display: none;');
// }
//
// function displayText() {
//   divId.setAttribute('style', '');
// }

// Exercice 3
// var divId = document.getElementById('text');
//
// function changeColor(elem) {
//   divId.style = 'color: ' + elem.classList.item(1) + ';';
// }

// Exercice 4
var divOriginal = document.getElementById('password');
var divToCheck = document.getElementById('confirmPassword');

function checkPassword() {
  if(!divOriginal.value) {
    divOriginal.focus();
    alert('Petite tête. t\'as oublié de renseigner le premier champs !');
  } else if (!divToCheck.value) {
    divToCheck.focus();
    alert('Petite tête. t\'as oublié de renseigner le second champs !');
  } else if (divOriginal.value != divToCheck.value) {
    divOriginal.style = 'border: 2px solid red;';
    divToCheck.style = 'border: 2px solid red;';
    alert('Password dont match');
  } else {
    divOriginal.style = 'border: 2px solid green;';
    divToCheck.style = 'border: 2px solid green;';
    alert('Password confirm !');
  }
}
