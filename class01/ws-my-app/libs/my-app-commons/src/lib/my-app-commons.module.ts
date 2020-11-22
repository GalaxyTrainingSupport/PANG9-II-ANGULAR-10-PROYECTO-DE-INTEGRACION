import { NgModule } from '@angular/core';
import { MyAppCommonsComponent } from './my-app-commons.component';
import { MyTestComponent } from './my-test/my-test.component';



@NgModule({
  declarations: [MyAppCommonsComponent, MyTestComponent],
  imports: [
  ],
  exports: [MyAppCommonsComponent]
})
export class MyAppCommonsModule { }
