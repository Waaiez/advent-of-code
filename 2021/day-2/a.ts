export const x = '';

const input = await Deno.readTextFile('./input.txt');

const lines = input.split('\n');

const commands = lines.map((line) => {
	const [action, value] = line.split(' ');
	return { action, value: parseInt(value) };
});

let horizontal = 0;
let vertical = 0;

commands.forEach((command) => {
	switch (command.action) {
		case 'forward':
			horizontal += command.value;
			break;
		case 'up':
			vertical -= command.value;
			break;
		case 'down':
			vertical += command.value;
			break;
	}
});

console.log('The Final Position is', horizontal * vertical);
