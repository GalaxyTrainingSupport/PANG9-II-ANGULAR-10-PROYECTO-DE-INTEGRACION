import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IWorkshopFormData } from '@galaxy/commons/interfaces';
import { Instructor } from '@galaxy/commons/models';

import { Workshop } from '@galaxy/commons/models/workshop.model';
import { forkJoin } from 'rxjs';
import { InstructorsHttp } from '../../commons/http/instructors.http';
import { WorkshopsHttp } from '../../commons/http/workshops.http';

@Injectable()
export class WorkshopsUpdatePresenter {

  instructors: Instructor[];
  workshops: Workshop[];
  workshopId: string;
  workshop: Workshop;

  constructor(
    private instructorHttp: InstructorsHttp,
    private workshopHttp: WorkshopsHttp,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    this.workshopId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('El id del workshop a editar: ' ,this.workshopId);
  }

  load(): void {
    forkJoin([this.workshopHttp.getOne(this.workshopId), this.instructorHttp.getAll()])
    .subscribe(([ workshop, instructors ]) => {
      this.workshop = workshop;
      this.instructors = instructors
    });
  }

  // loadInstructors(): void {
  //   this.instructorHttp.getAll().subscribe(response => {
  //     this.instructors = response;
  //   });
  // }

  updateWorkshop(workshopFormData: IWorkshopFormData): void {
    this.workshopHttp.update(this.workshopId, workshopFormData).subscribe(response => {
      this.goBack();
    });
  }

  updatePoster(poster: File) {
    this.workshopHttp.updatePoster(this.workshopId, poster)
      .subscribe(
        res => {
          console.log('Imagen subida correctamente');
        },
        err => console.log(),
      );
  }

  goBack(): void {
    this.router.navigateByUrl('/admin/workshops');
  }
}
