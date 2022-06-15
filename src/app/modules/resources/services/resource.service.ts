import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  api: string = `${environment.servers.backend}/resource`;

  constructor(private httpClient: HttpClient) { }

  getResourceAvailability(resourceId: number, timeSlot: Date): Observable<any> {
    return this.httpClient.get(`${this.api}/${resourceId}/available?datetime=${timeSlot.toISOString()}`);
  }
}
