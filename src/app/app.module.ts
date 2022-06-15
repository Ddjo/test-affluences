import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourceAvailabilityFormComponent } from './components/resource-availability-form/resource-availability-form.component';
import { ResourceReservationFormComponent } from './components/resource-reservation-form/resource-reservation-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CalendarModule,
    ToastModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
