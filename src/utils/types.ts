export type RecipeFilters = RecipeFilter[];

export enum Categories {
  FOOD_TYPE = 'Food Type',
  INGREDIENTS = 'Ingredients',
  TIME = 'Time',
}

export type RecipeFilter = {
  category: Categories;
  options: string[];
};

// Not sure why we have different formats for total and selected filters
export type SelectedRecipeFilters = {
  [x: string]: Categories[];
};
