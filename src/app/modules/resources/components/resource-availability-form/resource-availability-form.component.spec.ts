import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAvailabilityFormComponent } from './resource-availability-form.component';

describe('ResourceAvailabilityFormComponent', () => {
  let component: ResourceAvailabilityFormComponent;
  let fixture: ComponentFixture<ResourceAvailabilityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceAvailabilityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceAvailabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
