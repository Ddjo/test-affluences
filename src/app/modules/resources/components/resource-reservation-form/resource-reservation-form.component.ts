import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-resource-reservation-form',
  templateUrl: './resource-reservation-form.component.html',
  styleUrls: ['./resource-reservation-form.component.scss']
})
export class ResourceReservationFormComponent implements OnInit {

  reservationForm: FormGroup;
  dateValue : Date;

  constructor(private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router : Router ) { 
      this.dateValue =( this.router.getCurrentNavigation()?.extras.state as any)?.dateValue;
    }

  ngOnInit(): void {

    // If date slot is empty, get to the resource availability page
    if (!(this.dateValue)) {
      this.router.navigate(['resource-availability'] );
    }
  
    // Build form
     this.reservationForm  = this.formBuilder.group({ 
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      phone: ['',],
      acceptTerms: [false, Validators.requiredTrue]
    });

  }

  isFormValid () {
    return this.reservationForm.valid;
  }

  submitReservationForm() {
    this.messageService.add({severity:'success', summary:'Réservation effectuée.'});
  }
  

}
