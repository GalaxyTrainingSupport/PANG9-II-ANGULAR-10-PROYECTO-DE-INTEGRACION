import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { WorkshopsView } from './views/workshops/workshops.view';
import { AdminComponent } from './admin.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'workshops', component: WorkshopsView },
      { path: 'workshops/create', component: WorkshopCreateView },
      { path: 'workshops/update/:id', component: WorkshopUpdateView }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
