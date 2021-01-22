import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { WorkshopsView } from './views/workshops/workshops.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { DashboardView } from './views/dashboard/dashboard.view';

@NgModule({
  declarations: [
    AdminComponent,
    WorkshopsView,
    WorkshopCreateView,
    WorkshopUpdateView,
    DashboardView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule
  ]
})
export class AdminModule { }
