import { Injectable } from '@angular/core';
import { GlxParticipantsHttpModule } from './participants.module';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../apps/galaxy/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: GlxParticipantsHttpModule
})
export class GlxParticipantsHttp {
  api = `${environment.api}/participants`;

  constructor(private http: HttpClient) { }

  registerWorkshop(workshopId: string, register: boolean): Observable<object> {
    return this.http.post(this.api, { workshop: workshopId, register });
  }
}
