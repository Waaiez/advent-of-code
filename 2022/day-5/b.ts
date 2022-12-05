export const x = '';

const input = await Deno.readTextFile('./input.txt');
// const input = await Deno.readTextFile('./test.txt');

const [initialStacks, movesArr] = input.split('\n\n');

const stacks = initialStacks.split('\n');

const numOfStacks = stacks.slice(-1)[0].replace(/\s/g, '').split('');

stacks.pop();

const stackObj = {};

for (const key of numOfStacks) {
	// @ts-ignore - not going to bother
	stackObj[key] = [];
}

stacks.forEach((stack) => {
	stack = stack.replace(/ {4}/g, '[0]');

	stack = stack.replaceAll(/\s/g, '');

	const locations = stack.match(/.{1,3}/g);

	locations?.forEach((location, i) => {
		if (location[1] !== '0') {
			// @ts-ignore - not going to bother
			stackObj[i + 1].push(location[1]);
		}
	});
});

const moves = movesArr.split('\n');

moves.forEach((move) => {
	const simpleMove = move.match(/\d+/g)!.map((n) => parseInt(n));

	const boxesToMove = simpleMove[0];
	const stackToMoveFrom = simpleMove[1];
	const stackToMoveTo = simpleMove[2];

	// @ts-ignore - not going to bother
	const boxes = stackObj[stackToMoveFrom].splice(0, boxesToMove);

	if (boxes) {
		// @ts-ignore - not going to bother
		stackObj[stackToMoveTo] = [...boxes, ...stackObj[stackToMoveTo]];
	}
});

let finalOrder = '';

for (const key in stackObj) {
	// @ts-ignore - not going to bother
	finalOrder += stackObj[key][0];
}

console.log(
	'After the rearrangement procedure completes, the final order of the crates in top is',
	finalOrder
);
