// Function to validate the user's input and check if it matches the expected string "Git is Awesome"
function validateUserInput() {
    // Ask the user for input and store it in a variable
    let userInput = prompt("Please enter 'Git is Awesome'");
  
    // Check if the input matches the expected string
    while (userInput !== "Git is Awesome") {
      // If the input is not as expected, provide an error message and ask the user to input again
      userInput = prompt("Incorrect input. Please enter 'Git is Awesome'");
    }
  
    // If the input is correct, return the value
    return userInput;
  }
  
  // Call the validation function and store the correct input in a variable
  let validatedInput = validateUserInput();
  
  // Print out the validated input
  console.log("You entered: " + validatedInput);  