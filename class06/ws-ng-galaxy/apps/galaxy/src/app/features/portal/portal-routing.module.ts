import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { HomeView } from './views/home/home.view';
import { WorkshopRegisterView } from './views/workshop-register/workshop-register.view';


const routes: Routes = [
  { path: '', component: PortalComponent, children: [
    { path: '', component: HomeView },
    { path: 'register-workshop', component: WorkshopRegisterView }
  ]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
