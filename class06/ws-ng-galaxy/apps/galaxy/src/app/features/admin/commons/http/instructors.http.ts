import { Injectable } from '@angular/core';
import { AdminHttpModule } from './http.module';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../src/environments/environment';
import { IInstructorResponse } from '@galaxy/commons/interfaces';
import { map } from 'rxjs/operators';
import { Instructor, User } from '@galaxy/commons/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: AdminHttpModule
})
export class InstructorsHttp {
  private api = environment.api;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Instructor[]> {
    return this.http.get<IInstructorResponse[]>(`${this.api}/instructors`)
    .pipe(
      map((res) => res.map((item) => new Instructor(item)))
    );
  }
}
