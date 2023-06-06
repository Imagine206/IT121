function countUp(number) {
    if (number > 10) {
      return; // Base case: Stop recursion when number is greater than 10
    }
    
    console.log(number); // Output the current number
    countUp(number + 1); // Recursively call countUp with the next number
  }

  countUp(1);




const outputOne = () => console.log('one');
const outputTwo = () => console.log('two');
const outputThree = () => {
  console.log('three');

  outputOne();
  
  outputTwo();
};
const outputFour = () => {
  console.log('four');

  setTimeout(outputOne, 0); // Invoke outputOne after a delay of 0 milliseconds

  setTimeout(outputThree, 0); // Invoke outputThree after a delay of 0 milliseconds
};

outputFour();
// Output: four, one, three, one, two


