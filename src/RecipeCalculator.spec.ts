import { calculateCostPerUnit, calculateCostPerKg } from "./RecipeCalculator";

const ingredients = [
	{
		id: "1",
		name: "Chocolate 55%",
		weight: 1000,
		cost: 10,
	},
	{
		id: "3",
		name: "Sugar",
		weight: 1500,
		cost: 10,
	},
];

describe("calculateCostPerUnit", () => {
	it("should return cost of raw ingredient as cost per unit", () => {
		const chocolate = ingredients[0];
		expect(calculateCostPerUnit(chocolate)).toBe(10);
	});
});

describe("calculateCostPerKg", () => {
	it("should return cost per kg of raw ingredient", () => {
		const chocolate = ingredients[0];
		expect(calculateCostPerKg(chocolate.cost, chocolate.weight)).toBe(10);
	});

	it("should return cost per kg of raw ingredient in two decimal places", () => {
		const sugar = ingredients[1];
		expect(calculateCostPerKg(sugar.cost, sugar.weight)).toBe(6.67);
	});
});
