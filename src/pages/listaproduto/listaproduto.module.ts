import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaprodutoPage } from './listaproduto';

@NgModule({
  declarations: [
    ListaprodutoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaprodutoPage),
  ],
})
export class ListaprodutoPageModule {}
