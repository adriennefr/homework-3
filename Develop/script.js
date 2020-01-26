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
  let length = prompt("How long do you want your password?(from 8 to 128)")

  if (length < 8 || length > 128) {
    alert("Has to be MORE than 8 LESS than 128 characters!")
    return
  }

   let options = []
   if (useUppercase) {
     options.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
   }
   if (useLowercase) {
     options.push("abcdefghijklmnopqrstuvwxyz");
   }
   if (useSpecial) {
     options.push("&$#!%")
   }
   if (useNumbers) {
     options.push("0123456789") 
   }

  let  password = ""
  for (let i = 0; i < length; i++) {
    let optionIndex = Math.floor(Math.random()*options.length)
    console.log(optionIndex)
    let characterIndex = Math.floor(Math.random()*options[optionIndex].length)
    let character = options[optionIndex][characterIndex]
    password = password + character
  }
    
  return password
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
