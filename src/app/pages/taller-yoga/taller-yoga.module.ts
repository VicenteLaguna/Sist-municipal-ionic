import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TallerYogaPageRoutingModule } from './taller-yoga-routing.module';

import { TallerYogaPage } from './taller-yoga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TallerYogaPageRoutingModule
  ],
  declarations: [TallerYogaPage]
})
export class TallerYogaPageModule {}
