import { Injectable } from '@angular/core';
import { WorkshopsHttp } from '../../commons/http/workshops.http';

@Injectable()
export class WorkshopsPresenter {
  constructor(private http: WorkshopsHttp){}

  loadWorkshops(): void {
    this.http.getAllPortal().subscribe(response => {
      console.log(response);
    })
  }
}
