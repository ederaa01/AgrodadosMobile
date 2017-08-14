import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListavisitaPage } from './listavisita';

@NgModule({
  declarations: [
    ListavisitaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListavisitaPage),
  ],
})
export class ListavisitaPageModule {}
