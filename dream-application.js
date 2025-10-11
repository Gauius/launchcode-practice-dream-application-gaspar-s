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

loginName = readline.question(`${loginTemplate}Username: `);
loginPassword = readline.question(`${loginTemplate} "Password: `);

signUpName = readline.question(`${signupTemplate} Username: `);
signUpPassword = readline.question(`${signupTemplate} Password: `);
