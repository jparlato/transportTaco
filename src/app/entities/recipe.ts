export interface Recipe {
  id?: number;
  recipeName: string;
  shellType?: string;
  proteinType?: string;
  toppingsType?: string;
}

export interface RecipeEntities {
  [key: number]: Recipe;
}
