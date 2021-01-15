import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTacoComponent } from './create-taco.component';

describe('CreateTacoComponent', () => {
  let component: CreateTacoComponent;
  let fixture: ComponentFixture<CreateTacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
