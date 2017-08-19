import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';


@NgModule({
  declarations: [
    MenuPage
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
})
export class MenuPageModule {}
