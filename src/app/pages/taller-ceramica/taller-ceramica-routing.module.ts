import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TallerCeramicaPage } from './taller-ceramica.page';

const routes: Routes = [
  {
    path: '',
    component: TallerCeramicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TallerCeramicaPageRoutingModule {}
