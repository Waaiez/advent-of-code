export const x = '';

const input = await Deno.readTextFile('./input.txt');

const inputArray = input.split('\n').map(Number);

let isBiggerCount = 0;

for (let i = 0; i < inputArray.length; i++) {
	const currentWindow = inputArray
		.slice(i, i + 3)
		.reduce((partialSum, a) => partialSum + a, 0);
	const nextWindow = inputArray
		.slice(i + 1, i + 4)
		.reduce((partialSum, a) => partialSum + a, 0);

	if (nextWindow > currentWindow) isBiggerCount++;
}

console.log(
	`There are ${isBiggerCount} measurement windows that are larger than the previous measurement window`
);
