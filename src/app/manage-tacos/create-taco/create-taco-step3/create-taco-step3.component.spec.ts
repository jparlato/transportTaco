import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTacoStep3Component } from './create-taco-step3.component';

describe('CreateTacoStep3Component', () => {
  let component: CreateTacoStep3Component;
  let fixture: ComponentFixture<CreateTacoStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTacoStep3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTacoStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
