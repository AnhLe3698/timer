let userInput = process.argv.slice(2);

const stdin = process.stdin;
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  
  // need to remove whitspaces
  if (key.trim() === "b") {
    console.log(`You pressed ${String(key)}`);
    process.stdout.write('\x07');
  } else if (!isNaN(Number(key)) && Number(key) < 10 && Number(key) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("Beep at", Number(key), "seconds");
    }, 1000 * Number(key));
  }
});

// Thia is the way to send a message to the user when we exit the program
// using crl+c in the terminal
process.on('SIGINT', function() {
  process.stdout.write('\n Thanks for using me, ciao! \n');
  process.exit();
});

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
          console.log("Beep at", items, "seconds");
        }, 1000 * items); // The units for user input in seconds(1000ms)
      }
    }
  }
};

// Driver code
main(userInput);