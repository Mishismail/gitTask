// Function to validate the user's input and check if it matches the expected string "Git is Awesome"
function validateUserInput() {
    // Maximum number of retries allowed
    const maxRetries = 3;
    let retryCount = 0;
  
    do {
      // Ask the user for input and store it in a variable
      let userInput = prompt("Please enter the phrase 'Git is Awesome' exactly as shown");
  
      // Check if the input matches the expected string (case-insensitive)
      if (userInput.toLowerCase() === "git is awesome") {
        // If the input is correct, return the value
        return userInput;
      } else {
        // If the input is not as expected, provide an error message and ask the user to input again
        retryCount++;
        if (retryCount < maxRetries) {
          alert("Incorrect input. Please try again.");
        } else {
          alert("Maximum number of retries exceeded. Exiting the program.");
          // Exit the script gracefully
          throw new Error("Validation Failed");
        }
      }
    } while (retryCount < maxRetries);
  
    // This line should never be reached, but adding it as a fallback.
    throw new Error("Validation Failed");
  }
  
  // Function to display the result with the inputted data
  function displayResult(inputData) {
    console.log("You entered: " + inputData);
  }
  
  // Main part of the script
  function main() {
    try {
      let validatedInput = validateUserInput(); // Call the validation function and store the correct input in a variable
      displayResult(validatedInput); // Print out the validated input
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Call the main function to start the program
  main();   