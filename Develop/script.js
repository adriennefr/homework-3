// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(){
let useUppercase = confirm("Do you want uppercase?")
let useLowercase = confirm("Do you want lowercase?")
let useSpecial = confirm("Do you want special characters?")
let useNumbers = confirm("Do you want numbers?")

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"
let special = "&*$#!%"
let num = "1234567890"
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
