import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTacoStep2Component } from './create-taco-step2.component';

describe('CreateTacoStep2Component', () => {
  let component: CreateTacoStep2Component;
  let fixture: ComponentFixture<CreateTacoStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTacoStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTacoStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
