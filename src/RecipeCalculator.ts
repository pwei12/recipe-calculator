const GRAMS_PER_KILOGRAMS = 1000;

interface Ingredient {
	weight: number;
	cost: number;
}

const calculateCostPerUnit = ({ cost }: Ingredient) => {
	return cost;
};

const calculateCostPerKg = (cost: number, weight: number) => {
	return cost / (weight / GRAMS_PER_KILOGRAMS);
};

export {
    calculateCostPerUnit,
    calculateCostPerKg
};
