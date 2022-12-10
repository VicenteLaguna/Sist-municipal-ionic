import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TallerCocinaPage } from './taller-cocina.page';

const routes: Routes = [
  {
    path: '',
    component: TallerCocinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallerCocinaPageRoutingModule {}
