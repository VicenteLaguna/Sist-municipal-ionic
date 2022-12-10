import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallerCocinaPageRoutingModule } from './taller-cocina-routing.module';

import { TallerCocinaPage } from './taller-cocina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallerCocinaPageRoutingModule
  ],
  declarations: [TallerCocinaPage]
})
export class TallerCocinaPageModule {}
