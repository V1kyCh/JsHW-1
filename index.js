let age = 14;
console.log(age);

const myName = "Victoria";
console.log(myName);

let isStudent = "Ти є студентом?";
confirm(isStudent);
const result = confirm(isStudent);
console.log(result);

const myString = "Життя красиве, коли кольорове...";
console.log(myString);

const myNumber = 10;
const numberResult = myNumber + 10;
console.log("myNumber -", myNumber);
console.log("numberResult -", numberResult);

const myNull = null;
console.log(myNull);

let yourName = "Enter your name";
prompt(yourName);
const resultYourName = prompt(yourName);
console.log("Привіт,", resultYourName);

const confirmation = confirm("Підтвердити?");
if (confirmation === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

alert("Ця дія небезпечна!");
const confirmationAlert = confirm("Підтвердити?");
if (confirmationAlert === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
