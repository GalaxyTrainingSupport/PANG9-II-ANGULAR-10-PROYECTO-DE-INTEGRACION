import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { MyTestComponent } from './my-test/my-test.component';



@NgModule({
  declarations: [MyLibraryComponent, MyTestComponent],
  imports: [
  ],
  exports: [MyLibraryComponent]
})
export class MyLibraryModule { }
