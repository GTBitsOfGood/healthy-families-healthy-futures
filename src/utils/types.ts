export type RecipeFilters = RecipeFilter[];

export type RecipeFilter = {
  category: string;
  options: string[];
};

// Not sure why we have different formats for total and selected filters
export type SelectedRecipeFilters = {
  [x: string]: string[];
};
