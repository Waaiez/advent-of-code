export const x = '';

const input = await Deno.readTextFile('./input.txt');

const lines = input.split('\n');

const commands = lines.map((line) => {
	const [action, value] = line.split(' ');
	return { action, value: parseInt(value) };
});

let horizontal = 0;
let vertical = 0;
let aim = 0;

commands.forEach((command) => {
	switch (command.action) {
		case 'forward':
			horizontal += command.value;
			vertical += aim * command.value;
			break;
		case 'up':
			aim -= command.value;
			break;
		case 'down':
			aim += command.value;
			break;
	}
});

console.log(
	'Using the new interpretation of the commands, the Final Position is now',
	horizontal * vertical
);
