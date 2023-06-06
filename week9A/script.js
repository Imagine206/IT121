// Select the first textarea element with the name attribute set to 'txtarea' and store it in the variable 'firstArea'.
const firstArea = document.querySelector('textarea[name="txtarea"]');
    
// Select the second textarea element with the name attribute set to 'txtarea2' and store it in the variable 'secArea'.
const secArea = document.querySelector('textarea[name="txtarea2"]');

// Find the first button element in the document and attach a click event listener to it, calling the 'lookUp' function when clicked.
const button = document.querySelector('button');
button.addEventListener('click', lookUp);

// Declare a function named 'lookUp'.
function lookUp() {
  // Get the value of the 'firstArea' text area and store it in the 'rawTxt' variable.
  const rawTxt = firstArea.value;
  
  // Use a regular expression to match and extract email addresses from the 'rawTxt' string, and store them in the 'eData' variable.
  const eData = rawTxt.match(/\b[\w.-]+@[\w.-]+\.\w+\b/g);
  
  // Create an empty array named 'holder' to store unique email addresses.
  const holder = [];
  
  // Iterate through each element in the 'eData' array.
  for (let i = 0; i < eData.length; i++) {
    const email = eData[i];
    
    // Check if the current email address is not already present in the 'holder' array.
    if (!holder.includes(email)) {
      // Add the current email address to the 'holder' array.
      holder.push(email);
    }
  }
  
  // Using the join() array method, join together the results of the email addresses found within the content and output it into the second textarea.
  secArea.value = holder.join('\n');
}