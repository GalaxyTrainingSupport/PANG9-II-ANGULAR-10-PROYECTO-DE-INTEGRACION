import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlxAuthenticationModule } from '@galaxy/commons/guards/authentication/authentication.module';
import { GlxHeaderModule } from '@galaxy/commons/components/header/header.module';
import { GlxFooterModule } from '@galaxy/commons/components/footer/footer.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlxAuthenticationModule,
    GlxHeaderModule,
    GlxFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
