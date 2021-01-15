import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTacoComponent } from './manage-taco.component';

describe('ManageTacoComponent', () => {
  let component: ManageTacoComponent;
  let fixture: ComponentFixture<ManageTacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
