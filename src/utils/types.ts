export enum Category {
  FOOD_TYPE = 'Food Type',
  INGREDIENTS = 'Ingredients',
  TIME = 'Time',
}

export type Tag = { key: string; name: string };

export type RecipeFilters = Record<Category, Tag[]>;
export type SelectedRecipeFilters = RecipeFilters;

export interface Event {
  description: string;
  end_time: Date;
  name: string;
  place: {
    name: string;
  };
  start_time: Date;
  id: string;
}

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Locale = 'en-US' | 'es-US';

declare global {
  interface Window {
    dataLayer: {
      push: (x: { event: string }) => void;
    };
  }
}
