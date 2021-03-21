import { RecipeFilter, RecipeFilters, SelectedRecipeFilters } from './types';

export function initRecipeFilters(
  foodTypeTags: GatsbyTypes.ContentfulFoodTypeTag[],
  ingredientTags: GatsbyTypes.ContentfulIngredientTag[],
  timeListStr: string,
) {
  const recipeFilters: RecipeFilters = [];
  recipeFilters.push(initFoodTypes(foodTypeTags));
  recipeFilters.push(initIngredients(ingredientTags));
  recipeFilters.push(initTimes(timeListStr));
  return recipeFilters;
}

function initFoodTypes(foodTypeTags: GatsbyTypes.ContentfulFoodTypeTag[]) {
  const foodTypeFilter: RecipeFilter = {
    category: 'Food Type',
    options: [],
  };

  foodTypeTags.forEach(tag => {
    if (tag.recipe) {
      foodTypeFilter['options'].push(tag.tagName as string);
    }
  });

  return foodTypeFilter;
}

function initIngredients(ingredientTags: GatsbyTypes.ContentfulIngredientTag[]) {
  const ingredientFilter: RecipeFilter = {
    category: 'Ingredients',
    options: [],
  };

  ingredientTags.forEach(tag => {
    if (tag.recipe) {
      ingredientFilter['options'].push(tag.tagName as string);
    }
  });

  return ingredientFilter;
}

function initTimes(timeListStr: string) {
  const timeFilter: RecipeFilter = {
    category: 'Time',
    options: [],
  };

  const timeList: string[] = timeListStr.split(',');

  for (let i = 0; i < timeList.length; i++) {
    if (i == 0) {
      timeFilter['options'].push(`< ${timeList[i]} min`);
    } else {
      timeFilter['options'].push(`${timeList[i - 1]} - ${timeList[i]} min`);
    }

    if (i == timeList.length - 1) {
      timeFilter['options'].push(`> ${timeList[i]} min`);
    }
  }

  return timeFilter;
}

export function filterRecipes(
  recipes: GatsbyTypes.ContentfulRecipe[],
  selectedFilters: SelectedRecipeFilters,
) {
  const filteredRecipes = recipes.filter(recipe => {
    const hasIngredients = checkIngredients(recipe, selectedFilters['Ingredients']);
    const hasFoodTypes = checkFoodTypes(recipe, selectedFilters['Food Type']);
    const hasTime = checkTime(recipe, selectedFilters['Time']);

    return hasIngredients && hasFoodTypes && hasTime;
  });

  return filteredRecipes;
}

function checkIngredients(recipe: GatsbyTypes.ContentfulRecipe, ingredients: string | string[]) {
  if (!ingredients) {
    return true;
  } else if (!recipe.ingredientTags2) {
    return false;
  } else if (typeof ingredients === 'string') {
    return recipe.ingredientTags2?.some(tag => {
      return tag?.tagName === ingredients;
    });
  }

  return recipe.ingredientTags2.some(ingredient => ingredients.includes(ingredient.tagName));
}

function checkFoodTypes(recipe: GatsbyTypes.ContentfulRecipe, foodTypes: string | string[]) {
  if (!foodTypes) {
    return true;
  } else if (!recipe.foodTypeTags2) {
    return false;
  } else if (typeof foodTypes === 'string') {
    return recipe.foodTypeTags2?.some(tag => {
      return tag?.tagName === foodTypes;
    });
  }

  return recipe.foodTypeTags2.some(foodType => foodTypes.includes(foodType.tagName));
}

function checkTime(recipe: GatsbyTypes.ContentfulRecipe, times: string[]) {
  if (!times) {
    return true;
  }

  const recipeTime = recipe.totalTime && recipe.prepTime ? recipe.totalTime + recipe.prepTime : 0;

  return times.some(time => isInRange(recipeTime, time));
}

function isInRange(time: number, timeRange: string) {
  if (timeRange[0] == '<') {
    return time < parseInt(timeRange.slice(2));
  } else if (timeRange[0] == '>') {
    return time > parseInt(timeRange.slice(2));
  }

  const interval = timeRange.split('-').map(num => parseInt(num));
  return time >= interval[0] && time <= interval[1];
}
