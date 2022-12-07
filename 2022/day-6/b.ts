export const x = '';

const input = await Deno.readTextFile('./input.txt');

for (let i = 0; i < input.length - 3; i++) {
	const arr = input.slice(i, i + 14).split('');

	const hasDuplicates = new Set(arr).size !== arr.length;

	if (!hasDuplicates) {
		console.log(
			i + 14,
			'characters need to be processed before the first start-of-packet marker is detected'
		);

		break;
	}
}
