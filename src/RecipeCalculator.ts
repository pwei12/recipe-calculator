const GRAMS_PER_KILOGRAMS = 1000;
const BASE_NUMBER = 10;
const TWO_DECIMAL_PLACES = 2;

interface Ingredient {
	weight: number;
	cost: number;
}

const calculateCostPerUnit = ({ cost }: Ingredient) => {
	return cost;
};

const calculateCostPerKg = (cost: number, weight: number) => {
    const costPerKg = (cost / (weight / GRAMS_PER_KILOGRAMS));
    return formatDecimalPlaces(costPerKg, TWO_DECIMAL_PLACES);
};

const formatDecimalPlaces = (cost, numberOfDecimalPlaces) => {
	const decimalOffset = Math.pow(BASE_NUMBER, numberOfDecimalPlaces);
	return Math.round(cost * decimalOffset) / decimalOffset;
};

export {
    calculateCostPerUnit,
    calculateCostPerKg
};
