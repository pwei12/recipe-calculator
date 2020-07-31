import {
    calculateCostPerUnit,
    calculateCostPerKg
} from "./RecipeCalculator";

describe("calculateCostPerUnit", () => {
    const chocolate = {
        id: "1",
        name: "Chocolate 55%",
        weight: 1000,
        cost: 10,
    };

	it("should return cost of raw ingredient as cost per unit", () => {
		expect(calculateCostPerUnit(chocolate)).toBe(10);
    });
    
    it('should return cost per kg of raw ingredient', () => {
		expect(calculateCostPerKg(chocolate.cost, chocolate.weight)).toBe(10);
    });
});

