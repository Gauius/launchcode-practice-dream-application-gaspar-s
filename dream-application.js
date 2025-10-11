/*
PSEUDOCODE

Start
  login page
    if username in list
      ask for password
        if password in list
          product search page
        else
          wrong password
    else
      sign up page
  sign up
    while user name not available
      ask for user name
    available
      accept user name
      create password
        validate password
          while password not valid
            ask for password
          valid
            accept password
            log in page
  product search page
    search category or item name
  products list page
    filter choices
      sort by price
      sort by review
    display choice
      top 5
      all
End
*/

/* login variables
I applied skilss here from Values, Data Types, and Operations.
I used camel case naming conventions and used meaningful names that can define itself.
I also used boolean varaibles and assigned false values.
Though not needed as undefined is a faulsy value but this is for readability.
*/
let loginName;
let loginPassword;
let validLoginName = false;
let validLoginPassword = false;

// sign up variables
let signUpName;
let signUpPassword;
let validSignUpName = false;
let validSignUpPassword = false;
let hasUpperCase = false;
let hasNumber = false;

// this is template literal and using specila character \n to add new line.
// This skill is from Stringing Characters Together
const loginTemplate = `########## LOG IN PAGE ##########\n`;
const signupTemplate = `########## SIGN UP PAGE ##########\n`;

/*
array for users name list
This skills is from Building Arrays
I used proper array naming conventions by making it plural and adding list to the end.
This a single array
*/
let userNamesList = ["admin 1Q2W3E4R", "user Q1W2E3R4", "allan 1Q2W3E4R"];
// This is 2D array
// This is productsList

/*
User Input login and signup
Here I installed readline-sync to enable user input.
I run the command npm install readline-sync in the terminal
then create a variable readline = require("readline-sync")
This skill is from Values, Data Types, and Operations-4.
*/
const readline = require("readline-sync");
// get the user name
let userName = readline.question(`${loginTemplate}Username: `);
// find the user name in the user names list and assigned to login name
// Use the iterator method find to return the first match and will return undefined if did not find any match
// This skill is from Use Array
loginName = userNamesList.find((element) =>
  element.startsWith(userName.toLowerCase())
);
console.log(loginName);

/*
login and sign up validation
Here I use the skills from Control Structures and Logic.
I use if else for conditional statements
Allowed user to login if user is valid and ask the user to sign up if not.
*/

if (loginName) {
  validLoginName = true;
  console.log(`${loginName} is in ${userNamesList}`);
  console.log(validLoginName);
  /*
  In here I combined skills from Stringing Characters Together and Control Structures and Logic
  I use string common method to split the name and password and assign it to new variable.
  I use loop and operator === to compare and validate the password.
  The while loop will continuously ask the user for password until correct password is given.
  */
  while (!validLoginPassword) {
    loginPassword = readline.question(`${loginTemplate} "Password: `);
    let userPassword = loginName.split(" ")[1];
    console.log(userPassword);

    if (loginPassword === userPassword) {
      validLoginPassword = true;
      console.log(`Correct password. Passwosrd is ${userPassword}`);
      console.log(validLoginPassword);
    } else {
      validLoginPassword = false;
      console.log(`Incorrect password. Passwosrd is ${userPassword}`);
    }
  }
  // if not valid user
} else {
  while (!validSignUpName) {
    signUpName = readline.question(
      `${signupTemplate}Please signup...\nCreate user name: `
    );
    let newUser = userNamesList.find((element) =>
      element.includes(signUpName.toLowerCase())
    );
    if (newUser) {
      validSignUpName = false;
      console.log("User name is not available. Please try again.");
    } else {
      validSignUpName = true;
      newUser = signUpName;
      console.log("New User is ok: " + newUser);
    }
    // verify if new user name exist
  }
  while (!validSignUpPassword) {
    signUpPassword = readline.question(`${signupTemplate}Password: `);
    for (let i = 0; i < signUpPassword.length; i++) {
      const password = signUpPassword[i];
      if (password >= "A" && password <= "Z") hasUpperCase = true;
      if (password >= "0" && password <= "9") hasNumber = true;
    }
    if (signUpPassword.length >= 8 && hasUpperCase && hasNumber) {
      validSignUpPassword = true;
      console.log("PASSWORD IS VALID");
    } else {
      console.log(
        "Password must be atleast eight characters, must have an uppercase and a number"
      );
    }
    console.log(signUpPassword.length, hasUpperCase, hasNumber);
    console.log(validSignUpPassword);
  }
}
