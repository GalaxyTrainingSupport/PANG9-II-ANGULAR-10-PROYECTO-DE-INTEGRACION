import { Component, OnInit } from '@angular/core';
import { IWorkshopResponse } from '../../../../../../../../libs/galaxy-commons/src/lib/interfaces/workshop.interface';

import { HomePresenter } from './home.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
  providers: [ HomePresenter ]
})
export class HomeView implements OnInit {

  // workshops: IWorkshopResponse[] = [];

  constructor(public presenter: HomePresenter) { }

  ngOnInit(): void {
    this.presenter.getAllWorkshops();
  }



}
