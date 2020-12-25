import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { WorkshopsView } from './views/workshops/workshops.view';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminCommonsModule } from './commons/commons.module';
import { AdminHttpModule } from './commons/http/http.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';

@NgModule({
  declarations: [AdminComponent, WorkshopsView, WorkshopCreateView, WorkshopUpdateView],
  imports: [
    AdminRoutingModule,
    CommonModule,
    AdminCommonsModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class AdminModule { }
