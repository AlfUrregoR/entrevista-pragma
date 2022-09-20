import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProductsPage } from './my-products.page';
import { MyProductsPageRoutingModule } from './my-products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyProductsPageRoutingModule,
  ],
  declarations: [MyProductsPage],
})
export class MyProductsPageModule {}
