import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Workshop } from '@galaxy/commons/models/workshop.model';
import { WorkshopsHttp } from '../../commons/http/workshops.http';

@Injectable()
export class WorkshopsPresenter {

  workshops: Workshop[];

  constructor(
    private http: WorkshopsHttp,
    private router: Router
  ){}

  loadWorkshops(): void {
    this.http.getAllPortal().subscribe(response => {
      this.workshops = response.map(item => new Workshop(item));
    })
  }

  goToEdit(id: string): void {
    this.router.navigate(['admin/workshops/update', id]);
  }

  remove(id: string): void {
    console.log('workshop remove:', id);
  }
}
