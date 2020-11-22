import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleFormComponent } from './sale-form/sale-form.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [SaleFormComponent, PaymentComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
