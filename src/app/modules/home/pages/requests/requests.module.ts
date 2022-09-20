import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsPage } from './requests.page';
import { RequestsPageRoutingModule } from './requests-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RequestsPageRoutingModule],
  declarations: [RequestsPage],
})
export class RequestsPageModule {}
