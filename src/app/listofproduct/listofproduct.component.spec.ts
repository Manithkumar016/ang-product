import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofproductComponent } from './listofproduct.component';

describe('ListofproductComponent', () => {
  let component: ListofproductComponent;
  let fixture: ComponentFixture<ListofproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofproductComponent]
    });
    fixture = TestBed.createComponent(ListofproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
