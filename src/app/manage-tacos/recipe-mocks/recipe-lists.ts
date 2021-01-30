import { Recipe } from 'src/app/entities/recipe';
export class ListRecipes {
  public static ALL_RECIPES_ONE: Recipe[] = [
    {
      id: 1,
      recipeName: 'SamsOne',
      shellType: 'SOFTSHELL',
      proteinType: 'MEAT',
      toppingsType: 'CHEESE',
      toppings: ['CHEESE', 'SOUR CREAM'],
    },
  ];
}
