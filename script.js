// Assignment Code

const generateButton = document.getElementById('generateBtn')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

// Prompts that appear when you click 'Generate Password'
function generatePassword() {
    var passwordLength = prompt("Please enter the number of characters you want for your new password. It must be at least 8 but not more than 128.");
    var lowerCases = confirm("Do you want lowercases in your password?");
    var upperCases = confirm("Do you want upper cases in your password");
    var numbers = confirm("Do you want numbers in your password?");
    var special = confirm("Do you want special characters in your password?");
  