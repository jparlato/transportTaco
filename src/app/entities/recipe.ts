export interface Recipe {
  id?: number;
  recipeName: string;
  shellType?: string;
  proteinType?: string;
  toppingsType?: string;
  toppings?: string[];
}

export interface RecipeEntities {
  [key: number]: Recipe;
}
