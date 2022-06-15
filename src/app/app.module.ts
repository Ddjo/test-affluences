import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceAvailabilityFormComponent } from './modules/resources/components/resource-availability-form/resource-availability-form.component';
import { ResourceReservationFormComponent } from './modules/resources/components/resource-reservation-form/resource-reservation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    ResourceAvailabilityFormComponent,
    ResourceReservationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
