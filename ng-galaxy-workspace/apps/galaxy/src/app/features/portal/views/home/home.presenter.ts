import { Injectable } from '@angular/core';
import { GlxParticipantsHttp, GlxWorkshopsHttp } from '@galaxy/commons/http';
import { Workshop } from '@galaxy/commons/models';
import { MatDialog } from '@angular/material/dialog';
import { GlxLoadingComponent } from '@galaxy/commons/components';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { GlxSession } from '@galaxy/commons/services';
import { Router } from '@angular/router';

@Injectable()
export class HomePresenter {
  workshops: Workshop[] = [];
  subscription: Subscription = new Subscription();

  constructor(
    private workshopsHttp: GlxWorkshopsHttp,
    private participantsHttp: GlxParticipantsHttp,
    private dialog: MatDialog,
    private session: GlxSession,
    private router: Router
  ) {
    this.session.onSessionClose.subscribe(() => {
      this.workshops = this.workshops.map((workshop) => {
        workshop.registered = false;
        return workshop;
      });
    });
  }

  loadWorkshops() {
    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    const subscription = this.workshopsHttp.getAllPortal()
      .pipe(finalize(() => loading.close()))
      .subscribe(
      worshops => {
        this.workshops = worshops;
      });

    this.subscription.add(subscription);
  }

  registerWorkshop(workshopId: string, registerValue: boolean) {

    if (!this.session.isAuthenticated) {
      return this.router.navigateByUrl('/auth/sign-in');
    }

    const loading = this.dialog.open(GlxLoadingComponent, { disableClose: true });
    const subscription = this.participantsHttp.registerWorkshop(workshopId, registerValue)
      .pipe(finalize(() => loading.close()))
      .subscribe(() => {
        this.workshops = this.workshops.map((workshop) => {
          if (workshop.id === workshopId) {
            workshop.registered = registerValue;
            return workshop;
          }
          return workshop;
        });
      });

    this.subscription.add(subscription);

  }

}
