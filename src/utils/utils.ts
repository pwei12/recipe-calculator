import { BASE_NUMBER } from "../constants/constants";

export const formatDecimalPlaces = (cost, numberOfDecimalPlaces) => {
	const decimalOffset = Math.pow(BASE_NUMBER, numberOfDecimalPlaces);
	return Math.round(cost * decimalOffset) / decimalOffset;
};

export const isNotRawIngredient = (cost) => {
	return cost === null;
}