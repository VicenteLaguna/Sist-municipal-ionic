import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallerAdigitalPageRoutingModule } from './taller-adigital-routing.module';

import { TallerAdigitalPage } from './taller-adigital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallerAdigitalPageRoutingModule
  ],
  declarations: [TallerAdigitalPage]
})
export class TallerAdigitalPageModule {}
