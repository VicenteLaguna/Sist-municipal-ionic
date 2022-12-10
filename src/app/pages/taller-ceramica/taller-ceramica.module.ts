import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallerCeramicaPageRoutingModule } from './taller-ceramica-routing.module';

import { TallerCeramicaPage } from './taller-ceramica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallerCeramicaPageRoutingModule
  ],
  declarations: [TallerCeramicaPage]
})
export class TallerCeramicaPageModule {}
