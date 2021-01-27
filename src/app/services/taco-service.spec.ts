import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { TestBed, inject } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/entities/recipe';
import { TacoService } from './taco-service';
import { environment } from './../../environments/environment';
import { getAllRecipes } from 'server/get-recipes.route';
import { recipeKeyCounter } from './../../../server/create-recipe.route';

const toppingMock = [{ code: 'CHEESE', description: 'GOOD CHEESE' }];

fdescribe('Taco Service', () => {
  let service: TacoService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  const initialState = {
    isLoading: false,
  };
  // tslint:disable-next-line: one-variable-per-declaration
  // let tacoService: TacoService,
  //   mockService = {
  //     findTacoToppingTypes: jasmine
  //       .createSpy('findTacoToppingTypes')
  //       .and.returnValue(of(toppingMock)),
  //   };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: TacoService }, provideMockStore({ initialState })],
    });

    spyOn(HttpClient.prototype, 'request').and.callThrough();

    // service = TestBed.inject(TacoService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(inject([TacoService], (mService: TacoService) => {
    service = mService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('findTacoToppingTypes() should NOT call http Get method for the given route', () => {
    // Arrange
    // Set Up Data

    spyOn(service, `findTacoToppingTypes`).and.returnValue(of(toppingMock));

    // Act
    service.findTacoToppingTypes().subscribe((topping) => {
      // Assert-1
      expect(topping).toEqual(toppingMock);
    });

    // Assert -2

    const req = httpMock.expectNone({
      method: 'GET',
      url: `http://localhost:4200/api/findTacoToppingTypes`,
    });

    httpMock.verify();
  });

  it('findTacoToppingTypes() should call http Get method for the given route', () => {
    // Arrange
    // Set Up Data

    spyOn(service, `findTacoToppingTypes`).and.returnValue(of(toppingMock));

    // Act
    service.findTacoToppingTypes().subscribe((topping) => {
      // Assert-1
      expect(topping).toEqual(toppingMock);
    });

    // Assert -2

    const req = httpMock.expectOne({
      method: 'GET',
      url: `http://localhost:4200/api/findTacoToppingTypes`,
    });

    // Assert - 3;
    req.flush(toppingMock);

    httpMock.verify();
  });

  it('findTacoToppingTypes() should call http Get method toppins and return a list of toppings', () => {
    // Arrange
    // Set Up Data

    spyOn(service, 'findTacoToppingTypes').and.returnValue(of(toppingMock));
    // Act
    service.findTacoToppingTypes().subscribe((topping) => {
      // Assert-1
      expect(topping).toEqual(toppingMock);
    });

    httpMock.verify();
  });

  it('findRecipeById() should call service and find specific recipe', () => {
    // Arrange
    const RecipeOne: Recipe = JSON.parse(
      '{"recipeName":"SamsOne","shellType":"GLUTENFREE","toppings":["CHEESE","SOUR CREAM"],"proteinType":"MEAT","id":"1"}'
    );

    spyOn(service, 'findRecipeById').and.returnValue(of(RecipeOne));
    // Set Up Data

    // Act
    service.findRecipeById(RecipeOne.id ?? 1).subscribe((recipe) => {
      // Assert-1
      expect(recipe).toEqual(RecipeOne);
    });

    httpMock.verify();
  });
  it('findRecipeById() should call service and find specific recipe', () => {
    // Arrange
    const RecipeOne: Recipe = JSON.parse(
      '{"recipeName":"SamsOne","shellType":"GLUTENFREE","toppings":["CHEESE","SOUR CREAM"],"proteinType":"MEAT","id":"1"}'
    );

    spyOn(service, 'findRecipeById').and.returnValue(of(RecipeOne));
    // Set Up Data

    // Act
    service.findRecipeById(RecipeOne.id ?? 1).subscribe((recipe) => {
      // Assert-1
      expect(recipe).toEqual(RecipeOne);
    });

    httpMock.verify();
  });
});
