import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { App, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(
    app: App,
    menu: MenuController,
    navControler : NavController
  ) {

    menu.enable(true);
    menu.open();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage RODRIGO MONTEIRO');
  }

}
