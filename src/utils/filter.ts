import { Category, RecipeFilters, SelectedRecipeFilters } from './types';
import { removeNulls } from './util';

type RecipeQuery = GatsbyTypes.RecipeQueryQuery;

// Initializes tags in sidebar based on all Contentful tags of each category
export function initRecipeFilters(
  foodTypeTags: RecipeQuery['allContentfulFoodTypeTag']['nodes'],
  ingredientTags: RecipeQuery['allContentfulIngredientTag']['nodes'],
  timeListStr: string | undefined,
): RecipeFilters {
  return {
    'Food Type': initFoodTypes(foodTypeTags),
    Ingredients: initIngredients(ingredientTags),
    Time: initTimes(timeListStr),
  };
}

// Initializes all food type tags with a RecipeFilter object that has options and category title
function initFoodTypes(foodTypeTags: RecipeQuery['allContentfulFoodTypeTag']['nodes']) {
  return removeNulls(
    foodTypeTags.map(tag => {
      if (tag.recipe && tag.tagName) {
        return tag.tagName;
      }
    }),
  );
}

// Initializes all ingredients tags with a RecipeFilter object that has options and category title
function initIngredients(ingredientTags: RecipeQuery['allContentfulIngredientTag']['nodes']) {
  return removeNulls(
    ingredientTags.map(tag => {
      if (tag.recipe && tag.tagName) {
        return tag.tagName;
      }
    }),
  );
}

// Initializes all time tags with a RecipeFilter object that has options and category title
function initTimes(timeListStr: string | undefined) {
  if (timeListStr == null) {
    return [];
  }

  const timeList: string[] = timeListStr.split(',');

  return [
    `< ${timeList[0]} min`,
    ...removeNulls(
      timeList.map((time, i) => {
        if (i !== 0) {
          return `${timeList[i - 1]} - ${time} min`;
        }
      }),
    ),
    `> ${timeList[timeList.length - 1]} min`,
  ];
}

// Filters all recipes given the selected filters
export function filterRecipes(
  recipes: RecipeQuery['allContentfulRecipe']['nodes'],
  selectedFilters: SelectedRecipeFilters,
) {
  const filteredRecipes = recipes.filter(recipe => {
    const hasIngredients = checkIngredients(recipe, selectedFilters[Category.INGREDIENTS]);
    const hasFoodTypes = checkFoodTypes(recipe, selectedFilters[Category.FOOD_TYPE]);
    const hasTime = checkTime(recipe, selectedFilters[Category.TIME]);

    return hasIngredients && hasFoodTypes && hasTime;
  });

  return filteredRecipes;
}

// Returns a boolean based on whether recipe matches the critera of the ingredients filter
function checkIngredients(
  recipe: RecipeQuery['allContentfulRecipe']['nodes'][0],
  ingredients?: string | string[],
) {
  if (!ingredients) {
    return true;
  } else if (!recipe.ingredientTags) {
    return false;
  } else if (typeof ingredients === 'string') {
    return recipe.ingredientTags?.some(tag => {
      return tag?.tagName === ingredients;
    });
  }

  return recipe.ingredientTags.some(
    ingredient => ingredient?.tagName && ingredients.includes(ingredient.tagName),
  );
}

// Returns a boolean based on whether recipe matches the critera of the food types filter
function checkFoodTypes(
  recipe: RecipeQuery['allContentfulRecipe']['nodes'][0],
  foodTypes?: string | string[],
) {
  if (!foodTypes) {
    return true;
  } else if (!recipe.foodTypeTags) {
    return false;
  } else if (typeof foodTypes === 'string') {
    return recipe.foodTypeTags?.some(tag => {
      return tag?.tagName === foodTypes;
    });
  }

  return recipe.foodTypeTags.some(
    foodType => foodType?.tagName && foodTypes.includes(foodType.tagName),
  );
}

// Returns a boolean based on whether recipe matches the critera of the times filter
function checkTime(recipe: RecipeQuery['allContentfulRecipe']['nodes'][0], times?: string[]) {
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
