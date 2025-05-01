
const symbols = [
  "images/tequila.png", "images/vodka.png", "images/ice.png",
  "images/tequila.png", "images/ice.png", "images/vodka.png"
];

let freeSpins = 0;
let multiplier = 1;

function spin() {
  if (freeSpins > 0) {
    freeSpins--;
  }

  let result = [];
  for (let i = 1; i <= 3; i++) {
    const randIndex = Math.floor(Math.random() * symbols.length);
    document.getElementById(`reel${i}`).style.backgroundImage = `url('${symbols[randIndex]}')`;
    result.push(symbols[randIndex]);
  }

  evaluateResult(result);
}

function evaluateResult(result) {
  const tequilaCount = result.filter(s => s.includes("tequila")).length;
  const iceCount = result.filter(s => s.includes("ice")).length;

  if (tequilaCount === 3) {
    freeSpins = 15;
    multiplier = 1;
    document.getElementById("result").textContent = "BONUS! 15 Free Spins!";
  } else if (tequilaCount === 4) {
    freeSpins = 15;
    multiplier = 2 + iceCount;
    document.getElementById("result").textContent = `SUPER BONUS! 15 Free Spins x${multiplier}`;
  } else {
    document.getElementById("result").textContent = "Try again!";
  }
}
