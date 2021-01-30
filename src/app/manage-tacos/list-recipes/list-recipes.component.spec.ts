import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
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
import { Store } from '@ngrx/store';

fdescribe('ListRecipesComponent', () => {
  let component: ListRecipesComponent;
  let fixture: ComponentFixture<ListRecipesComponent>;
  // tslint:disable-next-line: prefer-const
  let tacoService: TacoService;
  let router: Router;
  let httpMock: HttpTestingController;
  let store: any;
  class StoreMock {
    isLoading = false;
    select(): boolean {
      return this.isLoading;
    }
    dispatch(): void {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: TacoService },
        { provide: Store, useClass: StoreMock },
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
    tacoService = TestBed.inject(TacoService);
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a list of all recipes', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(tacoService, 'findAllRecipes').and.returnValue(
      of([
        {
          id: 1,
          recipeName: 'SamsOne',
          shellType: 'SOFTSHELL',
          proteinType: 'MEAT',
          toppingsType: 'CHEESE',
          toppings: ['CHEESE', 'SOUR CREAM'],
        },
      ])
    );

    tick();
    fixture.detectChanges();
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    component.recipesFound$.subscribe((x) => {
      expect(x).toEqual([
        {
          id: 1,
          recipeName: 'SamsOne',
          shellType: 'SOFTSHELL',
          proteinType: 'MEAT',
          toppingsType: 'CHEESE',
          toppings: ['CHEESE', 'SOUR CREAM'],
        },
      ]);
    });
    flush();
  }));
});
