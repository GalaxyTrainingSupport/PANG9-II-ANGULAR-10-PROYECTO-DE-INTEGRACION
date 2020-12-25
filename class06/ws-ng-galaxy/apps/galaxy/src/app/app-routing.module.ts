import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlxIsAuthenticatedGuard } from '@galaxy/commons/guards/authentication/is-authenticated.guard';

import { PortalComponent } from './features/portal/portal.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin',
    canActivate: [ GlxIsAuthenticatedGuard ],
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
