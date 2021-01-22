import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomePresenter } from './home.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
  providers: [ HomePresenter ]
})
export class HomeView implements OnInit, OnDestroy {

  constructor(public presenter: HomePresenter) { }

  ngOnInit(): void {
    this.presenter.loadWorkshops();
  }

  ngOnDestroy(): void {
    this.presenter.subscription.unsubscribe();
  }

}
