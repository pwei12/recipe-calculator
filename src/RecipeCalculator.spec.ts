import {
	calculateCostPerUnit,
	calculateCostPerKg,
	calculateMeta,
	calculateCostPerUnitOfConstituent,
	calculateCostPerUnitOfRecipe
} from "./RecipeCalculator";
import {
	ingredients,
	chocolatePaste,
	chocolateBatter,
	chocolateCake
} from "./constants/testConstants";

describe("calculateCostPerUnit", () => {
	it("should return cost of raw ingredient as cost per unit", () => {
		const chocolate = ingredients[0];
		expect(calculateCostPerUnit(chocolate)).toBe(chocolate.cost);
	});

	it("should return total cost per unit of composite ingredient which has recipe made with raw ingredients only", () => {
		expect(calculateCostPerUnit(chocolatePaste)).toBe(14);
	});

	it("should return cost per unit of composite ingredient which has recipe made with composite ingredient", () => {
		expect(calculateCostPerUnit(chocolateBatter)).toBe(26.88);
	});

	it("should return cost per unit of product which has recipe made with composite ingredient", () => {
		const cost = 10.77 + 20.68;
		expect(calculateCostPerUnit(chocolateCake)).toBe(cost);
	});
});

describe("calculateCostPerKg", () => {
	it("should return cost per kg of raw ingredient", () => {
		const chocolate = ingredients[0];
		expect(calculateCostPerKg(chocolate.cost, chocolate.weight)).toBe(10);
	});

	it("should return cost per kg of raw ingredient in two decimal places", () => {
		const sugar = ingredients[2];
		expect(calculateCostPerKg(sugar.cost, sugar.weight)).toBe(6.67);
	});
});

describe("calculateMeta", () => {
	it("should return meta of a raw ingredient with properties cost, weigth and cosPerKg", () => {
		const sugar = ingredients[2];
		const sugarMeta = { cost: sugar.cost, weight: sugar.weight, costPerKg: 6.67 };
		expect(calculateMeta(sugar)).toEqual(sugarMeta);
	});

	it("should return meta of composite ingredient which has recipe made with raw ingredients only", () => {
		const meta = { cost: 14, weight: chocolatePaste.weight, costPerKg: 10.77 };
		expect(calculateMeta(chocolatePaste)).toEqual(meta);
	});

	it("should return meta of composite ingredient which has recipe made with raw ingredients and composite ingredient", () => {
		const meta = { cost: 26.88, weight: chocolateBatter.weight, costPerKg: 20.68 };
		expect(calculateMeta(chocolateBatter)).toEqual(meta);
	});

	it("should return meta of chocolate cake which has recipe made with composite ingredient", () => {
		const meta = { cost: 31.45, weight: chocolateCake.weight, costPerKg: 22.46 };
		expect(calculateMeta(chocolateCake)).toEqual(meta);
	});
});

describe("calculateCostPerUnitOfConstituent", () => {
	it("should return cost per unit of a recipe's constituent whose ingredient is raw ingredient", () => {
		const constituent = {
			id: "3",
			pos: 2,
			amt: 600,
			qty: 1,
			ingredient: ingredients[0],
		};
		expect(calculateCostPerUnitOfConstituent(constituent.amt, constituent.ingredient)).toBe(6);
	});

	it("should return cost per unit of a recipe's constituent in two decimal places", () => {
		const constituent = {
			id: "3",
			pos: 2,
			amt: 800,
			qty: 1,
			ingredient: ingredients[2],
		};
		expect(calculateCostPerUnitOfConstituent(constituent.amt, constituent.ingredient)).toBe(5.34);
	});
});

describe("calculateCostPerUnitOfRecipe", () => {
	it("should return cost per unit of a recipe", () => {
		const recipe = {
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
				},
			],
		};
		expect(calculateCostPerUnitOfRecipe(recipe)).toBe(14);
	});
});
