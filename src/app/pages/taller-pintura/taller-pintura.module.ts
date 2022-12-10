import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallerPinturaPageRoutingModule } from './taller-pintura-routing.module';

import { TallerPinturaPage } from './taller-pintura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallerPinturaPageRoutingModule
  ],
  declarations: [TallerPinturaPage]
})
export class TallerPinturaPageModule {}
