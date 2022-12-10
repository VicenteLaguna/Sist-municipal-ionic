import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TallerPinturaPage } from './taller-pintura.page';

const routes: Routes = [
  {
    path: '',
    component: TallerPinturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallerPinturaPageRoutingModule {}
