import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroprodutoPage } from './cadastroproduto';

@NgModule({
  declarations: [
    CadastroprodutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroprodutoPage),
  ],
})
export class CadastroprodutoPageModule {}
