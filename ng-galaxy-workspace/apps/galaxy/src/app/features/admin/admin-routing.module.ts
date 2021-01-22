import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardView } from './views/dashboard/dashboard.view';
import { WorkshopsView } from './views/workshops/workshops.view';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { GlxHasRolGuard } from '@galaxy/commons/guards';
import { UserRol } from '@galaxy/commons/models';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardView },
      { path: 'workshops', component: WorkshopsView },
      {
        path: 'workshops/create',
        canActivate: [ GlxHasRolGuard ],
        data: { rol: [UserRol.ADMIN] },
        component: WorkshopCreateView
      },
      {
        path: 'workshops/update/:workshopId',
        canActivate: [ GlxHasRolGuard ],
        data: { rol: [UserRol.ADMIN] },
        component: WorkshopUpdateView
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
