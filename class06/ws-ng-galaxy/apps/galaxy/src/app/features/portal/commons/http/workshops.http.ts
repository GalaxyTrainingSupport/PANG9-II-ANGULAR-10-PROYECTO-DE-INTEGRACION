import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.prod';
import { IWorkshopResponse } from '../../../../../../../../libs/galaxy-commons/src/lib/interfaces/workshop.interface';
import { PortalHttpModule } from './http.module';

@Injectable({
  providedIn: PortalHttpModule
})
export class WorkshopsHttp {

  API = environment.api;

  constructor(private http: HttpClient) { }

  getAllPortal(): Observable<IWorkshopResponse[]> {
    return this.http.get<IWorkshopResponse[]>(`${this.API}/workshops/portal`);
  }
}
