const players = [
  'felipe',
  'tiago',
  'dozol',
  'vergette',
  'deri',
  'kelvyn',
  'brenno',
  'gabriel',
  'tavares',
  'mp',
  'igor',
  'jamel',
  'PM',
  'vinicius',
  'antonio',
  'mascarado',
  'caio',
  'mateus',
  'breno'
  // 'lucas'
];

const numOfPlayers = players.length;
const teamSize = 4; // Customizable
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
for (let i = 0; i < numOfTeams; i++) {
  let team = teams[i].join(', ');

  console.log(`Time ${i + 1} - ${team}`);
  console.log('------------------------------------');
}




