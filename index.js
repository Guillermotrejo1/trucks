const loteriaContainer = document.querySelector('.loteria-container');
const generateBtn = document.getElementById('random');

const monsterTrucks = [
  { truck: "Grave Digger" },
  { truck: "El Toro Loco" },
  { truck: "Maximum Destruction" },
  { truck: "Monster Mutt" },
  { truck: "Blue Thunder" },
  { truck: "Megaladon" },
  { truck: "Yeti" },
  { truck: "Son-uva Digger" },
  { truck: "Horse Power" },
  { truck: "Toxic" },
  { truck: "Salvager" },
  { truck: "Alien Invasion" },
  { truck: "Zombie" },
  { truck: "Kraken" },
  { truck: "Mohawk Warrior" },
  { truck: "Avenger" },
  { truck: "Soldier Fortune" },
  { truck: "ThunderRoarous" },
  { truck: "Whiplash" },
  { truck: "Excaliber" },
  { truck: "Pirate's Curse" },
  { truck: "Knight Storm" },
  { truck: "Dragon" },
  { truck: "Dragonoid" },
  { truck: "Mayhem" },
  { truck: "Classroom Crusher" },
  { truck: "Axe" },
  { truck: "Earth Shaker" },
  { truck: "Jurrasic Attack" },
  { truck: "Sparkle Smash" },
  { truck: "Northern Nightmare" },
  { truck: "Velociraptor" },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateGrid() {
  loteriaContainer.innerHTML = "";
  const shuffledTrucks = shuffleArray([...monsterTrucks]);
  for (let i = 0; i < 20; i++) {
    const truck = document.createElement("div");
    truck.classList.add("truck");
    truck.textContent = shuffledTrucks[i].truck;
    loteriaContainer.appendChild(truck);
  }
}

generateGrid();

generateBtn.addEventListener('click', generateGrid);
