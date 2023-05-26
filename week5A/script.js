//ASSIGNMENT ONE

const size = 10; // Specify the size of the multiplication table

const table = []; // Array to store the final multiplication table

for (let row = 1; row <= size; row++) {
  const tempRow = []; // Temporary array to store the values of each row

  for (let col = 1; col <= size; col++) {
    const result = row * col; // Calculate the multiplication result
    tempRow.push(result); // Add the result to the temporary row array
  }

  table.push(tempRow); // Add the temporary row array to the main table array
}

// Print the multiplication table
for (let i = 0; i < table.length; i++) {
  console.log(table[i].join("\t")); // Join the values of each row with tabs
}


// ASSIGNMENT TWO

document.write("<h1>12 Times Table</h1>");

for (let i = 1; i <= 12; i++) {
  const result = 12 * i;
  document.write(`12 * ${i} = ${result}<br>`);
}