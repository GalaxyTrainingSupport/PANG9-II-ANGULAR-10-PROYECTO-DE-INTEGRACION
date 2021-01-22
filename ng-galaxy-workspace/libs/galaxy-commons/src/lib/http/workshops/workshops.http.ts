import { Injectable } from '@angular/core';
import { GlxWorkshopsHttpModule } from './workshops.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'apps/galaxy/src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Workshop } from '@galaxy/commons/models';
import { WorkshopResponse, WorkshopFormData, WorkshopReport } from '@galaxy/commons/interfaces';
import { dayJs } from '@galaxy/commons/utils';

@Injectable({
  providedIn: GlxWorkshopsHttpModule
})
export class GlxWorkshopsHttp {
  api = `${environment.api}/workshops`;

  constructor(private http: HttpClient) { }

  getAllPortal(): Observable<Workshop[]> {
    return this.http.get<WorkshopResponse[]>(`${this.api}/portal`)
    .pipe(
      map((originalResponse: WorkshopResponse[]) => {
        return originalResponse.map((item: WorkshopResponse) => new Workshop(item));
      })
    );
  }

  getAll(): Observable<Workshop[]> {
    return this.http.get<WorkshopResponse[]>(this.api)
    .pipe(
      map((originalResponse: WorkshopResponse[]) => {
        return originalResponse.map((item: WorkshopResponse) => new Workshop(item));
      })
    );
  }

  getOne(workshopId: string): Observable<Workshop> {
    return this.http.get<WorkshopResponse>(`${this.api}/${workshopId}`)
    .pipe(
      map((res: WorkshopResponse) => new Workshop(res))
    );
  }

  create(workshopFormData: WorkshopFormData) {
    return this.http.post(this.api, workshopFormData);
  }

  update(workshopId: string, workshopFormData: WorkshopFormData) {
    return this.http.put(`${this.api}/${workshopId}`, workshopFormData);
  }

  updatePoster(workshopId: string, poster: File) {
    const body = new FormData();
    body.set('poster', poster);

    return this.http.put(`${this.api}/${workshopId}/poster`, body);
  }

  reportParticipants(start?: string, end?: string): Observable<WorkshopReport[]> {
    let params = new HttpParams();
    if (start) { params = params.append('start', dayJs(start).format('YYYY-MM-DD')); }
    if (end) { params = params.append('end', dayJs(end).format('YYYY-MM-DD')); }

    console.log(params);
    return this.http.get<WorkshopReport[]>(`${this.api}/participants`, { params });
  }
}
