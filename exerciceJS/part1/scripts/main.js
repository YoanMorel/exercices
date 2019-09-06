// Exercice 6
// function getUserInfos() {
//   let firstNumber = document.getElementById('firstNumber').value;
//   let secondNumber = document.getElementById('secondNumber').value;
//   let remainder = firstNumber % secondNumber;
//   alert(remainder);
// }

// Exercice 7
// function getUserInfos() {
//   let shoeSize = document.getElementById('shoeSize').value;
//   let yearOfBirth = document.getElementById('yearOfBirth').value;
//
//   function calc(value1, value2) {
//     let result = 1769 + (50 * (5 + (value1 * 2)) - value2);
//     return result;
//   }
//
//   alert(calc(shoeSize, yearOfBirth));
// }

// Exercice 8
function getUserInfos() {
  let ageOfUser = parseInt(document.getElementById('age').value);

  if (ageOfUser >= 18) {
    alert('Vous êtes majeur. Commencez à vérifier l\'age des filles que vous draguez.');
  } else {
    alert('Vous êtes mineur.');
  }
}
