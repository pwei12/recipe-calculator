# recipe-calculator
<br />
## Description

The purpose of this app is to calculate the total cost, total weight, and cost per kg of a product.

It was written with TypeScript and the tests were written with Jest.

<br />

## Scripts

In this project's root directory, run

### `npm i`
to install all dependencies,

### `npm t` 
to run the written tests.

<br />

## Details

This app has two main funtions, calculateCostPerUnit and calculateMeta.

Function calculateCostPerUnit calculates the cost per unit of ingredient.

Funtion calculateMeta returns meta info (cost per unit, weight and cost per kg) of ingredient.

Ingredient can be raw ingredient or composite ingredient, which is created by other ingredients.

### Sample of data structure of a raw ingredient:
/**
 * @param id is unique id of an ingredient
 * @param name is the name of the ingredient
 * @param weight is the weight, in grams, per unit of ingredient
 * @param cost is the total cost in $, per unit of the ingredient
 */
const chocolate = {
  id: 'choc',
  name: 'Chocolate',
  weight: 1300,
  cost: 14,
}

### Sample of data structure of a composite ingredient created by other raw ingredients:
/**
 * @param id is unique id of an ingredient
 * @param name is the name of the ingredient
 * @param weight is the weight, in grams, per unit of ingredient
 * @param cost is the total cost in $, per unit of the ingredient. It is null and it's value needs to be determined by calculating the cost of its constituents
 * @param recipe refers to the fact that it is a "composite ingredient", not a "raw ingredient"
 * @param madeWith refers to the ingredients with which constitutes this recipe, and the respective amounts utillised in the recipe
 */
const chocolatePaste = {
  id: 'choc-paste',
  name: 'Chocolate Paste',
  weight: 1300,
  cost: null,
  recipe: {
    id: '1',
    madeWith: [
      {
        id: '1',
        pos: 0,
        amt: 1000,
        qty: 1,
        ingredient: chocolate //raw ingredient
      }
    ]
  }
}

### Sample of data structure of a composite ingredient created by raw ingredients and composite ingredients:
/**
 * @param id is unique id of an ingredient
 * @param name is the name of the ingredient
 * @param weight is the weight, in grams, per unit of ingredient
 * @param cost is the total cost in $, per unit of the ingredient. It is null and it's value needs to be determined by calculating the cost of its constituents
 * @param recipe refers to the fact that it is a "composite ingredient", not a "raw ingredient"
 * @param madeWith refers to the ingredients with which constitutes this recipe, and the respective amounts utillised in the recipe
 */
const chocolateBatter = {
  id: 'choc-batter',
  name: 'Chocolate Batter',
  weight: 1300,
  cost: null,
  recipe: {
    id: '2',
    madeWith: [
      {
        id: '1',
        pos: 0,
        amt: 2000,
        qty: 1,
        ingredient: chocolatePaste //composite ingredient
      },
      {
        id: '2',
        pos: 0,
        amt: 1000,
        qty: 1,
        ingredient: chocolate //raw ingredient
      }
    ]
  }
}

### Sample of data structure of a product created by composite ingredients:
const chocolateCake = {
  id: "choc-cake",
	name: "Chocolate Cake",
	weight: 1400,
	cost: null,
	recipe: {
		id: "1",
		madeWith: [
			{
				id: "1",
				pos: 0,
				amt: 1000,
				qty: 1,
				ingredient: chocolatePaste //composite ingredient
			},
			{
				id: "2",
				pos: 0,
				amt: 1000,
				qty: 1,
				ingredient: chocolateBatter //composite ingredient
			}
		]
	}
}
