import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Workshop } from '../../../../../../../../libs/galaxy-commons/src/lib/models/workshop.model';

import { WorkshopsHttp } from '../../commons/http/workshops.http';
import { IWorkshopResponse } from '../../../../../../../../libs/galaxy-commons/src/lib/interfaces/workshop.interface';

@Injectable()
export class HomePresenter {

  workshops: IWorkshopResponse[] = [];

  constructor(private workshopsService: WorkshopsHttp) { }

  getAllWorkshops(): void {
    this.workshopsService.getAllPortal()
    .pipe(
      map((workshopResponse: IWorkshopResponse[]) => {
        console.log(workshopResponse);
        return workshopResponse.map((item: IWorkshopResponse) => new Workshop(item));
      })
    )
    .subscribe(response => {
      this.workshops = response;
      console.log(this.workshops);
    });
  }
}
