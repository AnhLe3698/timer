let userInput = process.argv.slice(2);

const main = function(userInput) {
  // Checks if there are any user inputs using command line args
  if (userInput.length === 0) {
    console.log("No user input");
  } else {
    for (const items of userInput) {
      // Checks if the input is a number and greater than 0
      if (!isNaN(items) || items >= 0) {
        //Printing asynchronous message and beeping
        setTimeout(() => {
          process.stdout.write('\x07');
          console.log("Beep at ", items, "seconds");
        }, 1000 * items); // The units for user input in seconds(1000ms)
      }
    }
  }
};

// Driver code
main(userInput);
