/***** Password Generator Functionality *****/
// 1. User clicks on generate password button
// 2. Window alert asks user to input their password criteria
//    2a. Window alert asks user to input length of the password, between 8 and 128 characters
//        2aa. Include loop to return user to prompt if password length is outside of specified range
//        2ab. Include loop to return user to prompt if input is invalid
//        SUGGESTION: Could create a single loop to return to prompt if any input is not 8-128 
//    2b. Window alert asks user to select which character types to include in password
//        2ba. Include four prompts for each character type. If none are selected, restart loop with required input message
// 3. Generate new user password
//    3a. Create password generator funciton based on user inputs
//    3b. Loop the function between 8 and 128 times based on user input
// 4. Display new user password in page via html


// password character input funciton
var characterLength = function() {

  var promptCharacterNumber = window.prompt("How many characters in length would you like your password to be? Choose amywhere from 8 up to 128.");

  // check to see if number is within range
  if ((promptCharacterNumber >= 8) && (promptCharacterNumber <= 128)) {
    // return true if number is within range
    console.log("password length is " + promptCharacterNumber);
    return true;
  }
  else {
    //restart funciton if answer is invalid
    window.alert("Your selection is invalid! Please choose a number between 8 and 128.");
    return characterLength();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // inform user to input their criteria for password
  window.alert("Hello! Please continue to select your preferred criteria for a uniquely generated password.");

  // call function for password character input
  characterLength();

  /* var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; */


} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
