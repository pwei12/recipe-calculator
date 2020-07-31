import { formatDecimalPlaces, isNotRawIngredient } from "./utils/utils";
import { GRAMS_PER_KILOGRAMS, TWO_DECIMAL_PLACES, INITIAL_COST } from "./constants/constants";

interface MadeWith {
	pos: number;
	amt: number;
	qty: number;
	ingredient: Ingredient;
}

interface Recipe {
	madeWith: MadeWith[];
}

interface Ingredient {
	weight: number;
	cost: number;
	recipe?: Recipe;
}

const calculateCostPerUnit = ({ cost, recipe }: Ingredient) => {
	let unitCost = cost;
	if (isNotRawIngredient(cost)) {
		unitCost = calculateCostPerUnitOfRecipe(recipe);
	}
	return unitCost;
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
	return recipe.madeWith.reduce((total, { amt, ingredient }) => {
		if (isNotRawIngredient(ingredient.cost)) {
			ingredient.cost = calculateCostPerUnitOfRecipe(ingredient.recipe);
		}
		return total + calculateCostPerUnitOfConstituent(amt, ingredient);
	}, INITIAL_COST);
};

export {
	calculateCostPerUnit,
	calculateCostPerKg,
	calculateMeta,
	calculateCostPerUnitOfConstituent,
	calculateCostPerUnitOfRecipe,
};
