import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaclientePage } from './listacliente';

@NgModule({
  declarations: [
    ListaclientePage,
  ],
  imports: [
    IonicPageModule.forChild(ListaclientePage),
  ],
})
export class ListaclientePageModule {}
