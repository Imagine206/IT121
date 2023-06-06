// Define an array of image URLs
let myImages = ["samuel-branch-ZPVisr0s_hQ-unsplash.jpg", "engin-akyurt-YED0yXFLCoU-unsplash.jpg", "engin-akyurt-VCUSHIWzs0M-unsplash.jpg", "tim-mossholder--SHGJspY39A-unsplash.jpg"];

// Function to handle the load event
function loadHandler() {
  console.log("Page loaded");
  // Perform any additional actions when the page is loaded
}

// Function to handle the unload event
function unloadHandler() {
  console.log("Page unloaded");
  // Perform any cleanup or final actions when the page is unloaded
}

// Function to change the image when clicked
function changeImg(event) {
  let img = event.target; // Get the clicked image element
  let randomIndex = Math.floor(Math.random() * myImages.length); // Generate a random index
  let randomImage = myImages[randomIndex]; // Get a random image from the array
  img.src = randomImage; // Set the src attribute of the clicked image to the random image
}