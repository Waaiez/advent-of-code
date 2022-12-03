export const x = '';

const input = await Deno.readTextFile('./input.txt');

import { priorities, type PrioritiesObjectKey } from './priorities.ts';

const rucksacks = input.split('\n');

let prioritySum = 0;

let j = 0;

for (let i = 0; i < Math.ceil(rucksacks.length / 3); i++) {
	const currentTeam = rucksacks.slice(j, j + 3);

	const common = currentTeam[0]
		.split('')
		.filter(
			(value) =>
				currentTeam[1].split('').includes(value) &&
				currentTeam[2].split('').includes(value)
		);

	j += 3;

	const uniqueChar = [...new Set(common)][0];

	const priority = priorities[uniqueChar as PrioritiesObjectKey];

	prioritySum += priority;
}

console.log('The sum of the priorities is', prioritySum);
