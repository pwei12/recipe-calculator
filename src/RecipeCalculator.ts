interface Ingredient {
	weight: number;
	cost: number;
}

const calculateCostPerUnit = ({ cost }: Ingredient) => {
	return cost;
};

export { calculateCostPerUnit };
