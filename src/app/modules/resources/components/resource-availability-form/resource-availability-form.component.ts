import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ResourceService } from 'src/app/modules/resources/services/resource.service';

@Component({
  selector: 'app-resource-availability-form',
  templateUrl: './resource-availability-form.component.html',
  styleUrls: ['./resource-availability-form.component.scss']
})
export class ResourceAvailabilityFormComponent implements OnInit {

  @ViewChild('picker', {static: false}) picker: ElementRef;

  dateValue: Date;
  selectedResourceId: number;

  constructor(private router: Router,
    private resourceService: ResourceService,
    private messageService: MessageService) { }



  ngOnInit(): void {
    this.dateValue = new Date();
    this.selectedResourceId = 1337;
  }

  checkAvailability() {
    this.resourceService.getResourceAvailability(this.selectedResourceId ,this.dateValue).subscribe((value : any) => {
      if (value.available)  {
        this.router.navigate(['resource-reservation'], { state: { dateValue: this.dateValue }} );
      } else {
        this.messageService.add({severity:'error', summary:'Unavailable resource.'});
      }
    })
  }

}
