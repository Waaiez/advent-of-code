export const x = '';

const input = await Deno.readTextFile('./input.txt');

const pairs = input.split('\n');

let overlappingAssignments = 0;

pairs.forEach((sections) => {
	const [section1, section2] = sections.split(',');

	const section1Range = section1.split('-');
	const section2Range = section2.split('-');

	const range1 = [
		...Array(
			parseInt(section1Range[1]) - parseInt(section1Range[0]) + 1
		).keys(),
	].map((i) => i + parseInt(section1Range[0]));

	const range2 = [
		...Array(
			parseInt(section2Range[1]) - parseInt(section2Range[0]) + 1
		).keys(),
	].map((i) => i + parseInt(section2Range[0]));

	const isOverlapping =
		range1.every((v) => range2.includes(v)) ||
		range2.every((v) => range1.includes(v));

	if (isOverlapping) overlappingAssignments += 1;
});

console.log(
	`There are ${overlappingAssignments} assignment pairs where one range fully contain the other`
);
