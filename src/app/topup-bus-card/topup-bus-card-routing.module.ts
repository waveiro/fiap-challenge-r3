import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopupBusCardPage } from './topup-bus-card.page';

const routes: Routes = [
  {
    path: '',
    component: TopupBusCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopupBusCardPageRoutingModule {}
