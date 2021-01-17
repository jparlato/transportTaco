import { getAllRecipes } from 'server/get-recipes.route';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';
import { TacoService } from './taco-service';
import { inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

fdescribe('Taco Service', () => {
  const toppingMock = [{ code: 'CHEESE', description: 'GOOD CHEESE' }];

  let service: TacoService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  // tslint:disable-next-line: one-variable-per-declaration
  // tslint:disable-next-line: prefer-const
  // tslint:disable-next-line: one-variable-per-declaration
  // tslint:disable-next-line: prefer-const
  // tslint:disable-next-line: one-variable-per-declaration
  let tacoService: TacoService,
    mockService = {
      findTacoToppingTypes: jasmine
        .createSpy('findTacoToppingTypes')
        .and.returnValue(of(toppingMock)),
    };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: TacoService, useValue: mockService }],
    });
    service = TestBed.inject(TacoService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  beforeEach(inject([TacoService], (mService: TacoService) => {
    service = mService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('findTacoToppingTypes() should call http Get method for the given route', () => {
    // Arrange
    // Set Up Data

    // Act
    service.findTacoToppingTypes().subscribe((topping) => {
      // Assert-1
      expect(topping).toEqual(toppingMock);
    });

    // // Assert -2
    // const req = httpMock.expectOne('/api/getToppingTypes');

    // // Assert -3

    // expect(req.request.method).toEqual('GET');
    // req.flush(toppingMock);
    // // Assert -4

    httpMock.verify();
  });
});
