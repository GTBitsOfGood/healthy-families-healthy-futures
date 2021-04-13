export enum Category {
  FOOD_TYPE = 'Food Type',
  INGREDIENTS = 'Ingredients',
  TIME = 'Time',
}

export type Tag = { key: string; name: string };

export type RecipeFilters = Record<Category, Tag[]>;
export type SelectedRecipeFilters = RecipeFilters;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Locale = 'en-US' | 'es-US';
