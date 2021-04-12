import { Category, RecipeFilters, SelectedRecipeFilters, Tag } from './types';
import { removeNulls } from './util';

type RecipeQuery = GatsbyTypes.RecipePageQuery;

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
      if (tag.recipe && tag.tagName && tag.key) {
        return { key: tag.key, name: tag.tagName };
      }
    }),
  );
}

// Initializes all ingredients tags with a RecipeFilter object that has options and category title
function initIngredients(ingredientTags: RecipeQuery['allContentfulIngredientTag']['nodes']) {
  return removeNulls(
    ingredientTags.map(tag => {
      if (tag.recipe && tag.tagName && tag.key) {
        return { key: tag.key, name: tag.tagName };
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
  ].map(x => ({ key: x, name: x }));
}

// Filters all recipes given the selected filters
export function filterRecipes(
  recipes: RecipeQuery['allContentfulRecipe']['nodes'],
  selectedFilters: SelectedRecipeFilters,
  searchQuery: string,
) {
  const filteredRecipes = recipes.filter(recipe => {
    const hasIngredients = checkIngredients(recipe, selectedFilters[Category.INGREDIENTS]);
    const hasFoodTypes = checkFoodTypes(recipe, selectedFilters[Category.FOOD_TYPE]);
    const hasTime = checkTime(recipe, selectedFilters[Category.TIME]);
    const hasSearch = checkSearch(recipe, searchQuery);

    return hasIngredients && hasFoodTypes && hasTime && hasSearch;
  });

  return filteredRecipes;
}

// Returns a boolean based on whether recipe matches the critera of the ingredients filter
function checkIngredients(
  recipe: RecipeQuery['allContentfulRecipe']['nodes'][0],
  ingredients?: Tag[],
) {
  if (!ingredients || ingredients.length === 0) {
    return true;
  } else if (!recipe.ingredientTags) {
    return false;
  }

  return recipe.ingredientTags.some(
    ingredientTag => ingredientTag?.key && ingredients.some(i => i.key === ingredientTag.key),
  );
}

// Returns a boolean based on whether recipe matches the critera of the food types filter
function checkFoodTypes(recipe: RecipeQuery['allContentfulRecipe']['nodes'][0], foodTypes?: Tag[]) {
  if (!foodTypes || foodTypes.length === 0) {
    return true;
  } else if (!recipe.foodTypeTags) {
    return false;
  }

  return recipe.foodTypeTags.some(
    foodType => foodType?.key && foodTypes.some(f => f.key === foodType.key),
  );
}

// Returns a boolean based on whether recipe matches the critera of the times filter
function checkTime(recipe: RecipeQuery['allContentfulRecipe']['nodes'][0], times?: Tag[]) {
  if (!times || times.length === 0) {
    return true;
  }

  const recipeTime = recipe.totalTime && recipe.prepTime ? recipe.totalTime + recipe.prepTime : 0;

  return times.some(time => isInRange(recipeTime, time.key));
}

function checkSearch(recipe: RecipeQuery['allContentfulRecipe']['nodes'][0], search?: string) {
  if (search == null) {
    return true;
  }
  if (search.length === 0) {
    return true;
  }
  return (
    recipe.title?.toLowerCase().includes(search) ||
    recipe.directions?.directions?.toLowerCase().includes(search) ||
    recipe.ingredients?.ingredients?.toLowerCase().includes(search) ||
    recipe.description?.description?.toLowerCase().includes(search)
  );
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
