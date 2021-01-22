import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlxHasRolGuard, GlxIsAuthenticatedGuard } from '@galaxy/commons/guards';
import { UserRol } from '@galaxy/commons/models';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: 'admin',
    canActivate: [ GlxIsAuthenticatedGuard, GlxHasRolGuard ],
    data: { rol: [ UserRol.INSTRUCTOR, UserRol.ADMIN ] },
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'not-authorized',
    loadChildren: () => import('./features/not-authorized/not-authorized.module').then(m => m.NotAuthorizedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
