const myArr = ["Rock", "Paper", "Scissors"];

let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
let message = "Player " + myArr[player] + " vs Computer " + myArr[computer] + " ";

if (player === computer) {
  message += "It's a tie!";
} else if (
  (player === 0 && computer === 2) ||
  (player === 1 && computer === 0) ||
  (player === 2 && computer === 1)
) {
  message += "Player wins!";
} else {
  message += "Computer wins!";
}

console.log(message);