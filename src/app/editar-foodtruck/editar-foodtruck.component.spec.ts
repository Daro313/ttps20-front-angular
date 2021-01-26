import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFoodtruckComponent } from './editar-foodtruck.component';

describe('EditarFoodtruckComponent', () => {
  let component: EditarFoodtruckComponent;
  let fixture: ComponentFixture<EditarFoodtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFoodtruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
