import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopupBusCardPageRoutingModule } from './topup-bus-card-routing.module';

import { TopupBusCardPage } from './topup-bus-card.page';
import * as fromComponents from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopupBusCardPageRoutingModule
  ],
  declarations: [
    TopupBusCardPage,
    ...fromComponents.components
  ]
})
export class TopupBusCardPageModule { }
