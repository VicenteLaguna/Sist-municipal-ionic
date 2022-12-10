import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TallerAdigitalPage } from './taller-adigital.page';

const routes: Routes = [
  {
    path: '',
    component: TallerAdigitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallerAdigitalPageRoutingModule {}
