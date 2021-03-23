import { RecipeFilter, Categories, RecipeFilters, SelectedRecipeFilters } from './types';

// Initializes tags in sidebar based on all Contentful tags of each category
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

// Initializes all food type tags with a RecipeFilter object that has options and category title
function initFoodTypes(foodTypeTags: GatsbyTypes.ContentfulFoodTypeTag[]) {
  const foodTypeFilter: RecipeFilter = {
    category: Categories.FOOD_TYPE,
    options: [],
  };

  foodTypeTags.map(tag => {
    if (tag.recipe) {
      foodTypeFilter['options'].push(tag.tagName as string);
    }
  });

  return foodTypeFilter;
}

// Initializes all ingredients tags with a RecipeFilter object that has options and category title
function initIngredients(ingredientTags: GatsbyTypes.ContentfulIngredientTag[]) {
  const ingredientFilter: RecipeFilter = {
    category: Categories.INGREDIENTS,
    options: [],
  };

  ingredientTags.forEach(tag => {
    if (tag.recipe) {
      ingredientFilter['options'].push(tag.tagName as string);
    }
  });

  return ingredientFilter;
}

// Initializes all time tags with a RecipeFilter object that has options and category title
function initTimes(timeListStr: string) {
  const timeFilter: RecipeFilter = {
    category: Categories.TIME,
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

// Filters all recipes given the selected filters
export function filterRecipes(
  recipes: GatsbyTypes.ContentfulRecipe[],
  selectedFilters: SelectedRecipeFilters,
) {
  const filteredRecipes = recipes.filter(recipe => {
    const hasIngredients = checkIngredients(recipe, selectedFilters[Categories.INGREDIENTS]);
    const hasFoodTypes = checkFoodTypes(recipe, selectedFilters[Categories.FOOD_TYPE]);
    const hasTime = checkTime(recipe, selectedFilters[Categories.TIME]);

    return hasIngredients && hasFoodTypes && hasTime;
  });

  return filteredRecipes;
}

// Returns a boolean based on whether recipe matches the critera of the ingredients filter
function checkIngredients(recipe: GatsbyTypes.ContentfulRecipe, ingredients: string | string[]) {
  if (!ingredients) {
    return true;
  } else if (!recipe.ingredientTags) {
    return false;
  } else if (typeof ingredients === 'string') {
    return recipe.ingredientTags?.some(tag => {
      return tag?.tagName === ingredients;
    });
  }

  return recipe.ingredientTags.some(ingredient => ingredients.includes(ingredient.tagName));
}

// Returns a boolean based on whether recipe matches the critera of the food types filter
function checkFoodTypes(recipe: GatsbyTypes.ContentfulRecipe, foodTypes: string | string[]) {
  if (!foodTypes) {
    return true;
  } else if (!recipe.foodTypeTags) {
    return false;
  } else if (typeof foodTypes === 'string') {
    return recipe.foodTypeTags?.some(tag => {
      return tag?.tagName === foodTypes;
    });
  }

  return recipe.foodTypeTags.some(foodType => foodTypes.includes(foodType.tagName));
}

// Returns a boolean based on whether recipe matches the critera of the times filter
function checkTime(recipe: GatsbyTypes.ContentfulRecipe, times: string[]) {
  if (!times) {
    return true;
  }

  const recipeTime = recipe.totalTime && recipe.prepTime ? recipe.totalTime + recipe.prepTime : 0;

  return times.some(time => isInRange(recipeTime, time));
}

// Helper function to ensure the time given is within the time range in the form of a strings
function isInRange(time: number, timeRange: string) {
  if (timeRange[0] == '<') {
    return time < parseInt(timeRange.slice(2));
  } else if (timeRange[0] == '>') {
    return time > parseInt(timeRange.slice(2));
  }

  const interval = timeRange.split('-').map(num => parseInt(num));
  return time >= interval[0] && time <= interval[1];
}
