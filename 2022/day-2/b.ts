export const x = '';

const input = await Deno.readTextFile('./input.txt');

const codex = {
	A: 'Rock',
	B: 'Paper',
	C: 'Scissors',
	X: 'Lose',
	Y: 'Draw',
	Z: 'Win',
};

type CodexObjectKey = keyof typeof codex;

const shapePoints = {
	Rock: 1,
	Paper: 2,
	Scissors: 3,
};

type ShapePointsObjectKey = keyof typeof shapePoints;

const roundPoints = {
	Lost: 0,
	Draw: 3,
	Won: 6,
};

const rounds = input.split('\n');

let myPoints = 0;

rounds.forEach((round) => {
	let currentRoundPoints = 0;
	let myMove = '';

	let [oppMove, roundOutcome] = round.split(' ');

	oppMove = codex[oppMove as CodexObjectKey];
	roundOutcome = codex[roundOutcome as CodexObjectKey];

	if (roundOutcome === 'Draw') {
		myMove = oppMove;

		currentRoundPoints += roundPoints.Draw;
	}

	if (roundOutcome === 'Lose') {
		if (oppMove === 'Rock') myMove = 'Scissors';
		if (oppMove === 'Paper') myMove = 'Rock';
		if (oppMove === 'Scissors') myMove = 'Paper';

		currentRoundPoints += roundPoints.Lost;
	}

	if (roundOutcome === 'Win') {
		if (oppMove === 'Rock') myMove = 'Paper';
		if (oppMove === 'Paper') myMove = 'Scissors';
		if (oppMove === 'Scissors') myMove = 'Rock';

		currentRoundPoints += roundPoints.Won;
	}

	currentRoundPoints += shapePoints[myMove as ShapePointsObjectKey];

	myPoints += currentRoundPoints;
});

console.log(
	'My total score if everything went exactly according to the strategy guide would be',
	myPoints
);
