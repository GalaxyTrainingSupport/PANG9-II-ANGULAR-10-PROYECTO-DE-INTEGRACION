import { Injectable } from '@angular/core';
import { GlxWorkshopsHttp } from '@galaxy/commons/http';
import { WorkshopReport } from '@galaxy/commons/interfaces';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DashboardFiltersData } from '../../commons/interfaces/dashboard-filters-data';

@Injectable()
export class DashboardPresenter {

  participantsReport: WorkshopReport[] = [];

  constructor(
    private workshopsHttp: GlxWorkshopsHttp,
    private dialog: MatDialog
  ) { }

  loadReport(filters?: DashboardFiltersData) {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true, closeOnNavigation: false });
    this.workshopsHttp.reportParticipants(filters?.start, filters?.end)
      .pipe(finalize(() => loading.close()))
      .subscribe(
        res => this.participantsReport = res
      );
  }
}
