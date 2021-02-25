
const players = [
  'Deri',
'Igor',
'Kelvyn',
'Seda',
'Rubinho',
'Caio',
'Vergette',
'Jamel',
'PH',
'Dozol',
'Tiago',
'Victor faria',
'Tavares',
'Nathan quintela',
'gabriel gonçalves',
'Filipe',
'Lucas',
'mp',
'brenno',
'Davi' ,
'Pedro' ,
'Maurício' ,
'auer',
'Ítalo',
];

let playersLeft = [...players];

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
let numOfPlayersLeft;
let playerIndex; 

for (let i = 0; i < numOfTeams; i++) {
  for (let j = 0; j < teamSize; j++) {
    numOfPlayersLeft = playersLeft.length;

    playerIndex = Math.floor(Math.random() * numOfPlayersLeft);

    teams[i].push(playersLeft[playerIndex]);

    playersLeft.splice(playerIndex, 1);

    if (playersLeft.length === 0) break;
  }
}

// Display teams
function displayTeams() {
  let teamDisplay = '';

  for (let i = 0; i < numOfTeams; i++) {
    const teamLength = teams[i].length;
    const team = teams[i].join(', ');

    let divisor = '';
    for (let j = 0; j < 13 + (team.length); j++) {
      divisor += '-';
    }

    teamDisplay += `Team ${i + 1} - ${team} (${teamLength})\n${divisor}\n`;
  }

  return teamDisplay;
}

console.log(displayTeams());


