import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceReservationFormComponent } from './resource-reservation-form.component';

describe('ResourceReservationFormComponent', () => {
  let component: ResourceReservationFormComponent;
  let fixture: ComponentFixture<ResourceReservationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceReservationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
