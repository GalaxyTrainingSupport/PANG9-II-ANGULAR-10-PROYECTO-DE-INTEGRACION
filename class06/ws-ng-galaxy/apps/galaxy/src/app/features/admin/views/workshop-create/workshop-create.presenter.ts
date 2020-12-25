import { Injectable } from '@angular/core';

import { InstructorsHttp } from '../../commons/http/instructors.http';
import { Instructor } from '@galaxy/commons/models/instructor.model';
import { IWorkshopFormData } from '@galaxy/commons/interfaces';
import { WorkshopsHttp } from '../../commons/http/workshops.http';
import { Router } from '@angular/router';

@Injectable()
export class WorkshopsCreatePresenter {

  instructors: Instructor[];

  constructor(
    private instructorHttp: InstructorsHttp,
    private workshopHttp: WorkshopsHttp,
    private router: Router
  ){}

  loadInstructors(): void {
    this.instructorHttp.getAll().subscribe(response => {
      this.instructors = response;
    });
  }

  createWorkshop(workshopFormData: IWorkshopFormData): void {
    this.workshopHttp.create(workshopFormData).subscribe(response => {
      console.log('registrado correctamente', response);
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/admin/workshops');
  }

}
