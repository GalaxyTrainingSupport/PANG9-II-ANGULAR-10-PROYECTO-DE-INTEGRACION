import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PortalModule { }
