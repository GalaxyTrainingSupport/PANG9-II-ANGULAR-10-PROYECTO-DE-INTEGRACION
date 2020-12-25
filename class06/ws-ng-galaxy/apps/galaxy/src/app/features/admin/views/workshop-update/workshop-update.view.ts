import { Component, OnInit } from '@angular/core';

import { WorkshopsUpdatePresenter } from './workshop-update.presenter';

@Component({
  selector: 'app-workshop-update',
  templateUrl: './workshop-update.view.html',
  styleUrls: ['./workshop-update.view.scss'],
  providers: [WorkshopsUpdatePresenter]
})
export class WorkshopUpdateView implements OnInit {

  constructor(public presenter: WorkshopsUpdatePresenter) { }

  ngOnInit(): void {
    this.presenter.load();
  }

}
