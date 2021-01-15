import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTacoStep1Component } from './create-taco-step1.component';

describe('CreateTacoStep1Component', () => {
  let component: CreateTacoStep1Component;
  let fixture: ComponentFixture<CreateTacoStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTacoStep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTacoStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
