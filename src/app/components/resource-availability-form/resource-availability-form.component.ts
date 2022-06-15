import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-resource-availability-form',
  templateUrl: './resource-availability-form.component.html',
  styleUrls: ['./resource-availability-form.component.scss']
})
export class ResourceAvailabilityFormComponent implements OnInit {

  @ViewChild('picker', {static: false}) picker: ElementRef;

  dateValue: Date;

  constructor(private httpClient: HttpClient, private router: Router, private messageService: MessageService) { }



  ngOnInit(): void {
    this.dateValue = new Date();

  }

  checkAvailability() {
    this.httpClient.get('http://localhost:8080/resource/1337/available?datetime=' + this.dateValue.toISOString()).subscribe((value : any) => {
      if (value.available)  {
        this.router.navigate(['resource-reservation']);
      } else {
        this.messageService.add({severity:'error', summary:'indispo'});
      }
    })
  }

}
