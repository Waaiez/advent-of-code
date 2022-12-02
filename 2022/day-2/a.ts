export const x = '';

const input = await Deno.readTextFile('./input.txt');

const moves = {
	A: 'Rock',
	X: 'Rock',
	B: 'Paper',
	Y: 'Paper',
	C: 'Scissors',
	Z: 'Scissors',
};

type MovesObjectKey = keyof typeof moves;

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

	let [oppMove, myMove] = round.split(' ');

	oppMove = moves[oppMove as MovesObjectKey];
	myMove = moves[myMove as MovesObjectKey];

	currentRoundPoints += shapePoints[myMove as ShapePointsObjectKey];

	if (myMove === oppMove) {
		currentRoundPoints += roundPoints.Draw;
	} else if (myMove === 'Rock' && oppMove !== 'Paper') {
		currentRoundPoints += roundPoints.Won;
	} else if (myMove === 'Scissors' && oppMove !== 'Rock') {
		currentRoundPoints += roundPoints.Won;
	} else if (myMove === 'Paper' && oppMove !== 'Scissors') {
		currentRoundPoints += roundPoints.Won;
	} else {
		currentRoundPoints += roundPoints.Lost;
	}

	myPoints += currentRoundPoints;
});

console.log(
	'My total score if everything went exactly according to the strategy guide would be',
	myPoints
);
