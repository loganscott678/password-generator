// Prompt: Ask for length of password between 8 and 128 characters
// Ask for character types: 
//  - lowercase
//  - uppercase
//  - numeric
//  - special characters
// When prompt answered, input validated and at least 1 character type selected
// When all prompts are answered, password generated and displayed in alert or written on the page

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var special = '!@#$%^&*()/";:<>+=_-{}[]|';
var password = '';
var passChars = '';


function generatePassword() {

    var passwordLength = parseInt(prompt('How long would you like your password to be? Please enter a number between 8 and 128.'));

    // confirm input is valid
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength);

        var promptLower = window.confirm('Would you like to include lowercase characters?');
        if (promptLower) {
            passChars += lowerCase;
        }
        var promptUpper = window.confirm('Would you like to include uppercase characters?');
        if (promptUpper) {
            passChars += upperCase;
        }
        var promptNumber = window.confirm('Would you like to include numbers?');
        if (promptNumber) {
            passChars += numbers;
        }
        var promptSpecial = window.confirm('Would you like to include special characters?');
        if (promptSpecial) {
            passChars += special;
        }

        for(var i=0 ; i < passwordLength ; i++) {
            password += passChars[Math.floor(Math.random() * passChars.length)];
        }

    console.log(password);
    return password;

    }

    else {
        window.alert('You must enter a number between 8 and 128.');
        generatePassword();
    }
    
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

