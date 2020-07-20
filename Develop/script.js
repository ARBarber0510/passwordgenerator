// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password character arrays
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "<", ">", ".", "?", "/"];
var passwordChar = [];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  // Confirm parameters of password
  var confirmLength = prompt("Please select the length of your password.");

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password must be between 8 and 128 characters");
    var confirmLength = prompt("Please select the length of your password.");
  }

  var confirmNumeric = confirm("Would you like to include numeric characters?");

  if (confirmNumeric === true) {
    passwordChar = passwordChar.concat(numeric);

  }

  var confirmLowerAlpha = confirm("Would you like to include lowercase characters?");


  if (confirmLowerAlpha === true) {
    passwordChar = passwordChar.concat(lowerAlpha);
  }


  var confirmUpperAlpha = confirm("Would you like to include uppercase characters?");

  if (confirmUpperAlpha === true) {
    passwordChar = passwordChar.concat(upperAlpha);
  }


  var confirmSpecialChar = confirm("Would you like to include special characters?");

  if (confirmSpecialChar === true) {
    passwordChar = passwordChar.concat(specialChar);
  }

  console.log(passwordChar)

  // For loop
  var password = generatePassword();

  for (var i = 0; i < confirmLength; i++) {
    password = password + passwordChar[Math.floor(Math.random() * passwordChar.lenth)];
    console.log(password);

  }
  return (password);
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
}

  passwordText.value = password;



