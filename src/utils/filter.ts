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

function checkIngredients(recipe: GatsbyTypes.ContentfulRecipe, ingredients: string[]) {
  if (!ingredients) {
    return true;
  } else if (!recipe.ingredientTags) {
    return false;
  }

  return ingredients.every(ingredient => recipe.ingredientTags.includes(ingredient));
}

function checkFoodTypes(recipe: GatsbyTypes.ContentfulRecipe, foodTypes: string[]) {
  if (!foodTypes) {
    return true;
  } else if (!recipe.foodTypeTags) {
    return false;
  }

  return foodTypes.every(foodType => recipe.foodTypeTags.includes(foodType));
}

function checkTime(recipe: GatsbyTypes.ContentfulRecipe, times: string[]) {
  if (!times) {
    return true;
  } else if (times.length > 1) {
    return false;
  }

  const timeRange = times[0];
  const time = recipe.totalTime && recipe.prepTime ? recipe.totalTime + recipe.prepTime : 0;

  return isInRange(time, timeRange);
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
