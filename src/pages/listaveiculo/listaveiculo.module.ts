import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaveiculoPage } from './listaveiculo';

@NgModule({
  declarations: [
    ListaveiculoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaveiculoPage),
  ],
})
export class ListaveiculoPageModule {}
