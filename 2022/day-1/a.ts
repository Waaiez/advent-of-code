export const x = '';

const input = await Deno.readTextFile('./input.txt');

const caloriesPerElf = input.split('\n\n');

const totalCaloriesPerElf = caloriesPerElf.map((calories) => {
	return calories
		.split('\n')
		.filter((e) => e)
		.reduce((partialSum, a) => partialSum + parseInt(a), 0);
});

const mostCaloriesBeingCarried = Math.max(...totalCaloriesPerElf);

console.log('The most calories being carried is', mostCaloriesBeingCarried);
