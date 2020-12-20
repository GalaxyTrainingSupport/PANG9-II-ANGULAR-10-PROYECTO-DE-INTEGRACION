import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { WorkshopsView } from './views/workshops/workshops.view';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminCommonsModule } from './commons/commons.module';
import { AdminHttpModule } from './commons/http/http.module';

@NgModule({
  declarations: [AdminComponent, WorkshopsView],
  imports: [
    AdminRoutingModule,
    CommonModule,
    AdminCommonsModule,  ]
})
export class AdminModule { }
