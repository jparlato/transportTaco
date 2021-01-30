import { Observable, of } from 'rxjs';

export class TacoServiceStub {
  // tslint:disable-next-line: typedef
  findAllRecipes() {
    return of({
      1: {
        id: 1,
        recipeName: 'SamsOne',
        shellType: 'SOFTSHELL',
        proteinType: 'MEAT',
        toppingsType: 'CHEESE',
        toppings: ['CHEESE', 'SOUR CREAM'],
      },
    });
  }
}
