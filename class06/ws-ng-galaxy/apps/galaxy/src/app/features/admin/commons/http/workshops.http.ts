import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.prod';
import { AdminHttpModule } from './http.module';

import { IWorkshopFormData, IWorkshopResponse } from '@galaxy/commons/interfaces'
import { Workshop } from '@galaxy/commons/models/workshop.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: AdminHttpModule
})
export class WorkshopsHttp {

  API = environment.api;

  constructor(private http: HttpClient) { }

  getAllPortal(): Observable<IWorkshopResponse[]> {
    return this.http.get<IWorkshopResponse[]>(`${this.API}/workshops`);
  }

  create(body: IWorkshopFormData): Observable<IWorkshopResponse[]> {
    return this.http.post<IWorkshopResponse[]>(`${this.API}/workshops`, body);
  }

  getOne(workshopId: string): Observable<Workshop> {
    return this.http.get<IWorkshopResponse>(`${this.API}/workshops/${workshopId}`)
    .pipe(
      map((res: IWorkshopResponse) => new Workshop(res))
    );
  }

  update(workshopId: string, workshopFormData: IWorkshopFormData) {
    return this.http.put(`${this.API}/workshops/${workshopId}`, workshopFormData);
  }

  updatePoster(workshopId: string, poster: File) {
    const body = new FormData();
    body.set('poster', poster);

    return this.http.put(`${this.API}/workshops/${workshopId}/poster`, body);
  }
}
