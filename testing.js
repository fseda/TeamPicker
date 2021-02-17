const players = [
  // Initialize this array with the name of the players that will be playing
];

const teamSize = 4; // Customize this variable to your match your needs

const numOfPlayers = players.length;

const numOfTeams = numOfPlayers % teamSize === 0 ? 
  numOfPlayers / teamSize : 
  Math.floor(numOfPlayers / teamSize) + 1;

function Create2DArray(numOfTeams) {
  let arr = [];

  for (let i = 0; i < numOfTeams; i++)
    arr[i] = [];
  
  return arr;
}
const teams = Create2DArray(numOfTeams);

// Assign players to teams
for (let i = 0; i < numOfPlayers; i++) {
  let teamIndex = Math.floor(Math.random() * numOfTeams);

  while (teams[teamIndex].length === teamSize)
    teamIndex = Math.floor(Math.random() * numOfTeams);
  
  teams[teamIndex].push(players[i]);
}

// Display teams
function displayTeams() {
  let teamDisplay = '';

  for (let i = 0; i < numOfTeams; i++) {
    let team = teams[i].join(', ');

    teamDisplay += `Time ${i + 1} - ${team}\n` + '------------------------------------\n';
  }

  return teamDisplay;
}


console.log(displayTeams());