# recipe-calculator

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

### Data structure sample of a raw ingredient:
/** <br />
 \* @param id is unique id of an ingredient <br />
 \* @param name is the name of the ingredient <br />
 \* @param weight is the weight, in grams, per unit of ingredient <br />
 \* @param cost is the total cost in $, per unit of the ingredient <br />
**/
<br />
const chocolate = {  <br />
  id: 'choc',  <br />
  name: 'Chocolate',  <br />
  weight: 1300,  <br />
  cost: 14, <br />
}

### Data structure sample of a composite ingredient created by other raw ingredients:
/** <br />
 \* @param id is unique id of an ingredient <br />
 \* @param name is the name of the ingredient <br />
 \* @param weight is the weight, in grams, per unit of ingredient <br />
 \* @param cost is the total cost in $, per unit of the ingredient. It is null and it's value needs to be determined by calculating the cost of its constituents <br />
 \* @param recipe refers to the fact that it is a "composite ingredient", not a "raw ingredient" <br />
 \* @param madeWith refers to the ingredients with which constitutes this recipe, and the respective amounts utillised in the recipe <br />
 **/ 
 <br />
const chocolatePaste = { <br />
  id: 'choc-paste', <br />
  name: 'Chocolate Paste', <br />
  weight: 1300, <br />
  cost: null, <br />
  recipe: { <br />
    id: '1', <br />
    madeWith: [ <br />
      { <br />
        id: '1', <br />
        pos: 0, <br />
        amt: 1000, <br />
        qty: 1, <br />
        ingredient: chocolate //raw ingredient <br />
      } <br />
    ] <br />
  } <br />
} <br />

### Data structure sample of a composite ingredient created by raw ingredients and composite ingredients:
/** <br />
 \* @param id is unique id of an ingredient  <br />
 \* @param name is the name of the ingredient  <br />
 \* @param weight is the weight, in grams, per unit of ingredient  <br />
 \* @param cost is the total cost in $, per unit of the ingredient. It is null and it's value needs to be determined by calculating the cost of its constituents  <br />
 \* @param recipe refers to the fact that it is a "composite ingredient", not a "raw ingredient"  <br />
 \* @param madeWith refers to the ingredients with which constitutes this recipe, and the respective amounts utillised in the recipe  <br />
 */
  <br />
const chocolateBatter = {  <br />
  id: 'choc-batter', <br />
  name: 'Chocolate Batter', <br />
  weight: 1300, <br />
  cost: null, <br />
  recipe: { <br />
    id: '2', <br />
    madeWith: [ <br />
      { <br />
        id: '1', <br />
        pos: 0, <br />
        amt: 2000, <br />
        qty: 1, <br />
        ingredient: chocolatePaste //composite ingredient <br />
      }, <br />
      { <br />
        id: '2', <br />
        pos: 0, <br />
        amt: 1000, <br />
        qty: 1, <br />
        ingredient: chocolate //raw ingredient <br />
      } <br />
    ] <br />
  } <br />
} <br />

### Sample of data structure of a product created by composite ingredients:
const chocolateCake = { <br />
  id: "choc-cake", <br />
	name: "Chocolate Cake", <br />
	weight: 1400, <br />
	cost: null, <br />
	recipe: { <br />
		id: "1", <br />
		madeWith: [ <br />
			{ <br />
				id: "1", <br />
				pos: 0, <br />
				amt: 1000, <br />
				qty: 1, <br />
				ingredient: chocolatePaste //composite ingredient <br />
			}, <br />
			{ <br />
				id: "2", <br />
				pos: 0, <br />
				amt: 1000, <br />
				qty: 1, <br />
				ingredient: chocolateBatter //composite ingredient <br />
			} <br />
		] <br />
	} <br />
}
