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
Here I use the skills from Control Structures and Logic, Stringing Characters Together and Use array
I use if else conditional statements, for and while loops
I used string methods combined with array methos to find and extract array values
I also use different operators to compare and validate values.
*/

if (loginName) {
  validLoginName = true;
  console.log(`${loginName} is in ${userNamesList}`);
  console.log(validLoginName);
  //  continuously ask the user for password until correct password is given.
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
  //  continuously ask the user for new user names when the name is not available.
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
    // check if the given user name already exist in the usernames list
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
  }
  // Use the array method push to add new user and new user password to the user name list array
  // This skill is from Use Array
  userNamesList.push(signUpName + " " + signUpPassword);
  console.log(userNamesList);
}

// variables for products search and list page
const productSearchTemplate = `########## PRODUCT SEARCH PAGE ##########
Please select category of products to search: 1.Sports 2.Clothing 3.Electronics.`;
const productsListTemplate = `\n## LAZADA PRODUCTS LIST ##                        ## SHOPEE PRODUCTS LIST ##`;
console.log(productSearchTemplate);
// console.log(productsListTemplate);

// create 2d array skills from Use Array
let lazadaProductsList = [
  [
    "Soccer Ball $209.28 rating: 1 star",
    "Basketball $278.53 rating: 0 star",
    "Running Shoes $67.00 rating: 2 star",
    "Soccer Ball $130.94 rating: 5 star",
    "Dumbbell Set $191.45 rating: 0 star",
    "Cycling Helmet $74.64 rating: 0 star",
    "Dumbbell Set $286.30 rating: 2 star",
    "Yoga Mat $69.00 rating: 5 star",
    "Basketball $202.73 rating: 4 star",
    "Baseball Bat $85.04 rating: 4 star",
    "Tennis Racket $200.91 rating: 4 star",
    "Running Shoes $270.94 rating: 3 star",
  ],
  [
    "Gaming Console $790.98 rating: 5 star",
    "Drone $846.48 rating: 4 star",
    "Smart Watch $235.61 rating: 2 star",
    "External SSD $1405.05 rating: 5 star",
    "Smart Thermostat $1671.56 rating: 5 star",
    "Tablet $1675.66 rating: 3 star",
    "Bluetooth Speaker $1615.93 rating: 2 star",
    "Tablet $770.06 rating: 4 star",
    "Smart Thermostat $93.74 rating: 5 star",
    "Smart Thermostat $168.45 rating: 5 star",
    "Bluetooth Speaker $425.51 rating: 4 star",
    "Smart Thermostat $140.09 rating: 3 star",
  ],
  [
    "Air Fryer $186.40 rating: 0 star",
    "Food Processor $93.04 rating: 5 star",
    "Electric Kettle $315.40 rating: 3 star",
    "Blender $44.29 rating: 2 star",
    "Cast Iron Skillet $38.55 rating: 0 star",
    "Waffle Maker $181.27 rating: 1 star",
    "Cast Iron Skillet $333.03 rating: 4 star",
    "Food Processor $289.52 rating: 4 star",
    "Cast Iron Skillet $328.63 rating: 1 star",
    "Electric Kettle $62.95 rating: 1 star",
    "Air Fryer $134.25 rating: 5 star",
    "Digital Scale $150.28 rating: 3 star",
  ],
];

let shopeeProductsList = [
  [
    "Soccer Ball $105.76 rating: 4 star",
    "Cycling Helmet $250.55 rating: 4 star",
    "Basketball $82.54 rating: 1 star",
    "Running Shoes $93.27 rating: 1 star",
    "Yoga Mat $104.20 rating: 0 star",
    "Soccer Ball $205.58 rating: 3 star",
    "Cycling Helmet $286.15 rating: 4 star",
    "Running Shoes $259.05 rating: 5 star",
    "Golf Club $184.66 rating: 4 star",
    "Hockey Stick $73.00 rating: 1 star",
    "Tennis Racket $221.91 rating: 2 star",
    "Running Shoes $272.94 rating: 4 star",
  ],
  [
    "Gaming Console $1094.61 rating: 3 star",
    "4K TV $1518.68 rating: 2 star",
    "Smartphone $1199.07 rating: 5 star",
    "Tablet $1731.32 rating: 4 star",
    "Bluetooth Speaker $1783.16 rating: 2 star",
    "Drone $1146.67 rating: 2 star",
    "Gaming Console $1369.17 rating: 1 star",
    "Digital Camera $1577.36 rating: 0 star",
    "Smartphone $1645.59 rating: 3 star",
    "Drone $931.64 rating: 1 star",
    "Bluetooth Speaker $424.51 rating: 1 star",
    "Smart Thermostat $142.09 rating: 0 star",
  ],
  [
    "Digital Scale $482.62 rating: 2 star",
    "Immersion Blender $383.36 rating: 2 star",
    "Digital Scale $203.13 rating: 4 star",
    "Air Fryer $134.25 rating: 4 star",
    "Digital Scale $161.28 rating: 0 star",
    "Immersion Blender $169.94 rating: 3 star",
    "Food Processor $362.04 rating: 1 star",
    "Cast Iron Skillet $132.31 rating: 4 star",
    "Knife Set $308.17 rating: 4 star",
    "Food Processor $147.54 rating: 4 star",
    "Knife Set $377.24 rating: 5 star",
    "Waffle Maker $255.02 rating: 4 star",
  ],
];

let productToSearch = "";
productToSearch = readline.question("Search:");
let search = 0;
if (productToSearch === "1") {
  search = 0;
} else if (productToSearch === "2") {
  search = 1;
}
// This is to access the array using bracket notation. Use variable to make dynamic access.
// This skill is from Use Array
let lazadaProductSearchResult = lazadaProductsList[search];
let shopeeProductSearchResult = shopeeProductsList[search];

console.log(productsListTemplate);
// add column spacing to the products lisT

// use standard for loop and string literals to display the list in 2 columns.
// use additional string method repeat and length to align spacing between products list
// This skill is from Stringing Characters Together
for (let i = 0; i < lazadaProductSearchResult.length; i++) {
  let columnSpacing = " ".repeat(50 - lazadaProductSearchResult[i].length);
  console.log(
    `${lazadaProductSearchResult[i]}${columnSpacing}${shopeeProductSearchResult[i]}`
  );
}

/*Here will apply different array methods for filter choices.
To simulate reviewing product in two different ecommerce  websites.
Here I use the falsyness of undefined and did not assign value to variable exit.
Skills I used here are from Control Structures and Logic, Stringing Characters Together and Use array
*/
let exit;
const filterChoices = [
  "Sort by Name",
  "Sort by Price",
  "Sort by Rating",
  "Exit",
];
while (!exit) {
  let filterChosen = readline.question(`${productsListTemplate}
    Please choose filter to sort the products
    1. ${filterChoices[0]}
    2. ${filterChoices[1]}
    3. ${filterChoices[2]}
    4. ${filterChoices[3]}
    Your choice: `);

  // Sorted by Name: I use standard array sort method to sort the products list
  // And then use for loop with the bracket notation to log the list.
  // This skill is from Use Array
  if (filterChosen === "1") {
    console.log(
      "\n==========  " +
        filterChoices[0] +
        "  ==========" +
        productsListTemplate
    );
    lazadaProductSearchResult.sort();
    shopeeProductSearchResult.sort();
    for (let i = 0; i < lazadaProductSearchResult.length; i++) {
      let columnSpacing = " ".repeat(50 - lazadaProductSearchResult[i].length);
      console.log(
        `${lazadaProductSearchResult[i]}${columnSpacing}${shopeeProductSearchResult[i]}`
      );
    }
    //Here to sort by price and rating I used array sort method with call back funcion.
    // I used string method to extract variable for the call back variable a and b.
    // This is combined skills from Stringing Characters Together and Use array

    // Sorted by Price
  } else if (filterChosen === "2") {
    console.log(
      "\n==========  " +
        filterChoices[1] +
        "  ==========" +
        productsListTemplate
    );
    lazadaProductSearchResult.sort((a, b) => {
      let priceA = a.slice(a.indexOf("$") + 1, a.indexOf("rating") - 1);
      let priceB = b.slice(b.indexOf("$") + 1, b.indexOf("rating") - 1);
      return priceA - priceB;
    });
    shopeeProductSearchResult.sort((a, b) => {
      let priceA = a.slice(a.indexOf("$") + 1, a.indexOf("rating") - 1);
      let priceB = b.slice(b.indexOf("$") + 1, b.indexOf("rating") - 1);
      return priceA - priceB;
    });
    for (let i = 0; i < lazadaProductSearchResult.length; i++) {
      let columnSpacing = " ".repeat(50 - lazadaProductSearchResult[i].length);
      console.log(
        `${lazadaProductSearchResult[i]}${columnSpacing}${shopeeProductSearchResult[i]}`
      );
    }
    // Sorted by Rating
  } else if (filterChosen === "3") {
    console.log(
      "\n==========  " +
        filterChoices[2] +
        "  ==========" +
        productsListTemplate
    );
    lazadaProductSearchResult.sort((a, b) => {
      let ratingA = a.slice(a.indexOf(":") + 1, a.indexOf("star"));
      let ratingB = b.slice(b.indexOf(":") + 1, b.indexOf("star"));
      return ratingA - ratingB;
    });
    shopeeProductSearchResult.sort((a, b) => {
      let ratingA = a.slice(a.indexOf(":") + 1, a.indexOf("star"));
      let ratingB = b.slice(b.indexOf(":") + 1, b.indexOf("star"));
      return ratingA - ratingB;
    });

    for (let i = 0; i < lazadaProductSearchResult.length; i++) {
      let columnSpacing = " ".repeat(50 - lazadaProductSearchResult[i].length);
      console.log(
        `${lazadaProductSearchResult[i]}${columnSpacing}${shopeeProductSearchResult[i]}`
      );
    }
  } else if (filterChosen === "4") {
    exit = true;
  } else console.log("Please select a valid choice: 1-4");
}

// Output without filter
/*
Please select category of products to search: 1.Sports 2.Clothing 3.Electronics.
Search:1

## LAZADA PRODUCTS LIST ##                        ## SHOPEE PRODUCTS LIST ##
Soccer Ball $209.28 rating: 1 star                Soccer Ball $105.76 rating: 4 star
Basketball $278.53 rating: 0 star                 Cycling Helmet $250.55 rating: 4 star
Running Shoes $67.00 rating: 2 star               Basketball $82.54 rating: 1 star
Soccer Ball $130.94 rating: 5 star                Running Shoes $93.27 rating: 1 star
Dumbbell Set $191.45 rating: 0 star               Yoga Mat $104.20 rating: 0 star
Cycling Helmet $74.64 rating: 0 star              Soccer Ball $205.58 rating: 3 star
Dumbbell Set $286.30 rating: 2 star               Cycling Helmet $286.15 rating: 4 star
Yoga Mat $69.00 rating: 5 star                    Running Shoes $259.05 rating: 5 star
Basketball $202.73 rating: 4 star                 Golf Club $184.66 rating: 4 star
Baseball Bat $85.04 rating: 4 star                Hockey Stick $73.00 rating: 1 star
Tennis Racket $200.91 rating: 4 star              Tennis Racket $221.91 rating: 2 star
Running Shoes $270.94 rating: 3 star              Running Shoes $272.94 rating: 4 star
*/
// Output sorted by Name
/*
==========  Sort by Name  ==========
## LAZADA PRODUCTS LIST ##                        ## SHOPEE PRODUCTS LIST ##
Baseball Bat $85.04 rating: 4 star                Basketball $82.54 rating: 1 star
Basketball $202.73 rating: 4 star                 Cycling Helmet $250.55 rating: 4 star
Basketball $278.53 rating: 0 star                 Cycling Helmet $286.15 rating: 4 star
Cycling Helmet $74.64 rating: 0 star              Golf Club $184.66 rating: 4 star
Dumbbell Set $191.45 rating: 0 star               Hockey Stick $73.00 rating: 1 star
Dumbbell Set $286.30 rating: 2 star               Running Shoes $259.05 rating: 5 star
Running Shoes $270.94 rating: 3 star              Running Shoes $272.94 rating: 4 star
Running Shoes $67.00 rating: 2 star               Running Shoes $93.27 rating: 1 star
Soccer Ball $130.94 rating: 5 star                Soccer Ball $105.76 rating: 4 star
Soccer Ball $209.28 rating: 1 star                Soccer Ball $205.58 rating: 3 star
Tennis Racket $200.91 rating: 4 star              Tennis Racket $221.91 rating: 2 star
Yoga Mat $69.00 rating: 5 star                    Yoga Mat $104.20 rating: 0 star
*/
// Output sorted by Price
/*
==========  Sort by Price  ==========
## LAZADA PRODUCTS LIST ##                        ## SHOPEE PRODUCTS LIST ##
Running Shoes $67.00 rating: 2 star               Hockey Stick $73.00 rating: 1 star
Yoga Mat $69.00 rating: 5 star                    Basketball $82.54 rating: 1 star
Cycling Helmet $74.64 rating: 0 star              Running Shoes $93.27 rating: 1 star
Baseball Bat $85.04 rating: 4 star                Yoga Mat $104.20 rating: 0 star
Soccer Ball $130.94 rating: 5 star                Soccer Ball $105.76 rating: 4 star
Dumbbell Set $191.45 rating: 0 star               Golf Club $184.66 rating: 4 star
Tennis Racket $200.91 rating: 4 star              Soccer Ball $205.58 rating: 3 star
Basketball $202.73 rating: 4 star                 Tennis Racket $221.91 rating: 2 star
Soccer Ball $209.28 rating: 1 star                Cycling Helmet $250.55 rating: 4 star
Running Shoes $270.94 rating: 3 star              Running Shoes $259.05 rating: 5 star
Basketball $278.53 rating: 0 star                 Running Shoes $272.94 rating: 4 star
Dumbbell Set $286.30 rating: 2 star               Cycling Helmet $286.15 rating: 4 star
*/
// Output sorted by Rating
/*
==========  Sort by Rating  ==========
## LAZADA PRODUCTS LIST ##                        ## SHOPEE PRODUCTS LIST ##
Cycling Helmet $74.64 rating: 0 star              Yoga Mat $104.20 rating: 0 star
Dumbbell Set $191.45 rating: 0 star               Hockey Stick $73.00 rating: 1 star
Basketball $278.53 rating: 0 star                 Basketball $82.54 rating: 1 star
Soccer Ball $209.28 rating: 1 star                Running Shoes $93.27 rating: 1 star
Running Shoes $67.00 rating: 2 star               Tennis Racket $221.91 rating: 2 star
Dumbbell Set $286.30 rating: 2 star               Soccer Ball $205.58 rating: 3 star
Running Shoes $270.94 rating: 3 star              Soccer Ball $105.76 rating: 4 star
Baseball Bat $85.04 rating: 4 star                Golf Club $184.66 rating: 4 star
Tennis Racket $200.91 rating: 4 star              Cycling Helmet $250.55 rating: 4 star
Basketball $202.73 rating: 4 star                 Running Shoes $272.94 rating: 4 star
Yoga Mat $69.00 rating: 5 star                    Cycling Helmet $286.15 rating: 4 star
Soccer Ball $130.94 rating: 5 star                Running Shoes $259.05 rating: 5 star
*/
