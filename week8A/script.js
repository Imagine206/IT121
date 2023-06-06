function myMove() {
    let id = null; // ID to store the interval ID
    const elem = document.getElementById("animate"); // Get the animated element
    let pos = 0; // Initial position
    clearInterval(id); // Clear any previous animations
    id = setInterval(frame, 5); // Start the animation by calling the frame function repeatedly

    function frame() {
      if (pos == 350) {
        // Stop the animation when the desired end position is reached
        clearInterval(id);
      } else {
        pos++; // Increment the position
        elem.style.top = pos + 'px'; // Update the top position of the element
        elem.style.left = pos + 'px'; // Update the left position of the element
      }
    }
  }