export const x = '';

const input = await Deno.readTextFile('./input.txt');

const inputArray = input.split('\n').map(Number);

let isBiggerCount = 0;

for (let i = 0; i < inputArray.length; i++) {
	if (inputArray[i + 1] > inputArray[i]) isBiggerCount++;
}

console.log(
	`There are ${isBiggerCount} measurements are larger than the previous measurement`
);
