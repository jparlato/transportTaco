import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTacosComponent } from './list-tacos.component';

describe('ListTacosComponent', () => {
  let component: ListTacosComponent;
  let fixture: ComponentFixture<ListTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
