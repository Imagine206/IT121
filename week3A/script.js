//Creating an object called people
const people = {
    //set an empty array called friends
    friends: []
}


//Create Three objects for each friend
const friend1 = {
    firstName: "ayube",
    lastName: "Ali",
    id: 259808435
}
const friend2 = {
    firstName: "kadir",
    lastName: "james",
    id: 563425
}
const friend3 = {
    firstName: "sukon",
    lastName: "deeez",
    id: 127684
}

//Using the push() method add the friends objects to the people object
people.friends.push(friend1, friend2, friend3)


//Log the friends array to the console
console.table(people.friends);




//Get current date
const currentDate = new Date();

//Calculate date 12 months from now
const futureDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes());


// Convert date to a string in the format of "Month Day, Year"
// const dateString = futureDate.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// });


//Display date on webpage
document.getElementById('date').textContent = futureDate;