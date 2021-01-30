import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ListRecipesComponent } from './list-recipes.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TacoService } from './../../services/taco-service';
import { TacoServiceStub } from './../testing-support/taco-service-stub';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

fdescribe('ListRecipesComponent', () => {
  let component: ListRecipesComponent;
  let fixture: ComponentFixture<ListRecipesComponent>;
  let router: Router;
  let httpMock: HttpTestingController;
  const initialState = {
    isLoading: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: TacoService, useClass: TacoServiceStub },
        { provide: TacoService },
        provideMockStore({ initialState }),
      ],
      declarations: [ListRecipesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a list of all recipes', () => {
    component.ngOnInit();
    expect(component.recipesFound$).toEqual(
      of({
        id: 1,
        recipeName: 'SamsOne',
        shellType: 'SOFTSHELL',
        proteinType: 'MEAT',
        toppingsType: 'CHEESE',
        toppings: ['CHEESE', 'SOUR CREAM'],
      })
    );
  });
});
