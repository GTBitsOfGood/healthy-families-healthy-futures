export enum Category {
  FOOD_TYPE = 'Food Type',
  INGREDIENTS = 'Ingredients',
  TIME = 'Time',
}

export type RecipeFilters = Record<Category, string[]>;
export type SelectedRecipeFilters = Partial<RecipeFilters>;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Locale = 'en-US' | 'es-US';
