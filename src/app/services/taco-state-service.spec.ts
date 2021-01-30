import { TacoStateService } from './taco-state-service';

fdescribe('Recipe State Service', () => {
  it('should set next recipe name', () => {
    const expectedResult = { recipeName: 'test_recipe_name' };
    const svc = new TacoStateService();
    svc.updatedDataSelection(expectedResult);
    svc.tacoData.subscribe((res) => expect(res).toEqual(expectedResult));
  });
});
