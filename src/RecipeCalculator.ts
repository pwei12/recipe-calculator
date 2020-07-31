import { formatDecimalPlaces } from "./utils/utils";
import { GRAMS_PER_KILOGRAMS, TWO_DECIMAL_PLACES } from "./constants/constants";

interface Ingredient {
	weight: number;
	cost: number;
}

const calculateCostPerUnit = ({ cost }: Ingredient) => {
	return cost;
};

const calculateCostPerKg = (cost: number, weight: number) => {
	const costPerKg = cost / (weight / GRAMS_PER_KILOGRAMS);
	return formatDecimalPlaces(costPerKg, TWO_DECIMAL_PLACES);
};

const calculateMeta = (ingredient: Ingredient) => {
	const cost = calculateCostPerUnit(ingredient);
	const weight = ingredient.weight;
	return { cost, weight, costPerKg: calculateCostPerKg(cost, weight) };
};

const calculateCostPerUnitOfConstituent = (amount, { cost, weight }) => {
	const costPerUnit = calculateCostPerKg(cost, weight) * (amount / GRAMS_PER_KILOGRAMS);
	return formatDecimalPlaces(costPerUnit, TWO_DECIMAL_PLACES);
};

const calculateCostPerUnitOfRecipe = (recipe) => {
	return recipe.madeWith.reduce(
		(total, { amt, ingredient }) => total + calculateCostPerUnitOfConstituent(amt, ingredient),
		0
	);
};

export {
	calculateCostPerUnit,
	calculateCostPerKg,
	calculateMeta,
	calculateCostPerUnitOfConstituent,
	calculateCostPerUnitOfRecipe,
};
