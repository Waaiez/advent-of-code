export const x = '';

const input = await Deno.readTextFile('./input.txt');

import { priorities, type PrioritiesObjectKey } from './priorities.ts';

const rucksacks = input.split('\n');

let prioritySum = 0;

rucksacks.forEach((compartments) => {
	const middleIndex = Math.ceil(compartments.length / 2);

	const comp1 = compartments.slice(0, middleIndex);
	const comp2 = compartments.slice(-middleIndex);

	const common = comp1
		.split('')
		.filter((value) => comp2.split('').includes(value));

	const uniqueChar = [...new Set(common)][0];

	const priority = priorities[uniqueChar as PrioritiesObjectKey];

	prioritySum += priority;
});

console.log('The sum of the priorities is', prioritySum);
