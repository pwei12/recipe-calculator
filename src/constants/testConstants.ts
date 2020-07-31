export const ingredients = [
	{
		id: "1",
		name: "Chocolate 55%",
		weight: 1000,
		cost: 10,
	},
	{
		id: "2",
		name: "Water",
		weight: 1000,
		cost: 0,
	},
	{
		id: "3",
		name: "Sugar",
		weight: 1500,
		cost: 10,
	},
	{
		id: "4",
		name: "Egg",
		weight: 50,
		cost: 10,
	},
];

export const chocolatePaste = {
	id: "choc-paste",
	name: "Chocolate Paste",
	weight: 1300,
	cost: null,
	recipe: {
		id: "1",
		madeWith: [
			{
				id: "1",
				pos: 0,
				amt: 1000,
				qty: 1,
				ingredient: ingredients[0],
			},
			{
				id: "2",
				pos: 1,
				amt: 1000,
				qty: 1,
				ingredient: ingredients[1],
			},
			{
				id: "2",
				pos: 2,
				amt: 600,
				qty: 1,
				ingredient: ingredients[2],
			}
		]
	}
};

export const chocolateBatter = {
	id: "choc-batter",
	name: "Chocolate Batter",
	weight: 1300,
	cost: null,
	recipe: {
		id: "2",
		madeWith: [
			{
				id: "1",
				pos: 0,
				amt: 2000,
				qty: 1,
				ingredient: chocolatePaste,
			},
			{
				id: "2",
				pos: 0,
				amt: 1000,
				qty: 1,
				ingredient: ingredients[1],
			},
			{
				id: "3",
				pos: 0,
				amt: 500,
				qty: 1,
				ingredient: ingredients[2],
			},
			{
				id: "4",
				pos: 0,
				amt: 10,
				qty: 1,
				ingredient: ingredients[3],
			}
		]
	}
};

export const chocolateCake = {
	id: "choc-cake",
	name: "Chocolate Cake",
	weight: 1400,
	cost: null,
	recipe: {
		id: "1",
		madeWith: [
			{
				id: "1",
				pos: 0,
				amt: 1000,
				qty: 1,
				ingredient: chocolatePaste,
			},
			{
				id: "2",
				pos: 0,
				amt: 1000,
				qty: 1,
				ingredient: chocolateBatter,
			}
		]
	}
}