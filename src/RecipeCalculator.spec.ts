import { calculateCostPerUnit } from "./RecipeCalculator";

describe("calculateCostPerUnit", () => {
	it("should return cost of raw ingredient as cost per unit", () => {
		const chocolate = {
			id: "1",
			name: "Chocolate 55%",
			weight: 1000,
			cost: 10,
		};
		expect(calculateCostPerUnit(chocolate)).toBe(10);
	});
});
