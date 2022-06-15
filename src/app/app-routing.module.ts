import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceAvailabilityFormComponent } from './modules/resources/components/resource-availability-form/resource-availability-form.component';
import { ResourceReservationFormComponent } from './modules/resources/components/resource-reservation-form/resource-reservation-form.component';

const routes: Routes = [
  { path: '',  component: ResourceAvailabilityFormComponent },
  { path: 'resource-availability', component: ResourceAvailabilityFormComponent},
  { path: 'resource-reservation', component: ResourceReservationFormComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
