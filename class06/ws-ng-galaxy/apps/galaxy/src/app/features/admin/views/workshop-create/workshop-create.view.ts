import { Component, OnInit } from '@angular/core';
import { Workshop } from '@galaxy/commons/models/workshop.model';

import { WorkshopsCreatePresenter } from './workshop-create.presenter';

@Component({
  selector: 'app-workshop-create',
  templateUrl: './workshop-create.view.html',
  styleUrls: ['./workshop-create.view.scss'],
  providers: [WorkshopsCreatePresenter]
})
export class WorkshopCreateView implements OnInit {

  constructor(public presenter: WorkshopsCreatePresenter) { }

  ngOnInit(): void {
    this.presenter.loadInstructors();
  }

  createWorkshop(workshop: Workshop): void {
    
  }
}
