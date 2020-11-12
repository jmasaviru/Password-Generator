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

    // This is a minimum count for lowerCases, upperCases, numeric and specialCharacters
    var minimumCount = 0;

    // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumNumbers = "";
    var minimumSpecialCharacters = "";

  // Generator functions
  var functionArray = {
    
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },


    getSpecialCharacters: function() {
      const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};  
    

    
