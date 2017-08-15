import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroclientePage } from './cadastrocliente';

@NgModule({
  declarations: [
    CadastroclientePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroclientePage),
  ],
})
export class CadastroclientePageModule {}
