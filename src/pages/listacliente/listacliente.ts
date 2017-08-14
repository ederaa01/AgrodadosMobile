import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Alert } from 'ionic-angular';
import {Toast} from "ionic-native";

import { CadastroClientePage } from '../../pages/cadastrocliente/CadastroCliente';
import { DaoGenerico } from '../dao/dao';

/**
 * Generated class for the ListaclientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listacliente',
  templateUrl: 'listacliente.html',
})
export class ListaclientePage {

  dao : DaoGenerico;
  listClientes : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.dao = new DaoGenerico();
    this.dao.getList((lista) => {
      this.listClientes = lista;
    });

    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaclientePage');
  }

  insert() {
    let modal = this.modalCtrl.create(CadastroClientePage,{});

    modal.onDidDismiss((data) => {
      if (data) {
        this.dao.insert(data, (cliente) => {
          this.listClientes.push(cliente);

          Toast.showShortBottom("Cliente inserido com sucesso.").subscribe((toast) => {
            console.log(toast);
          });
        });
      }
    });

    this.nav.present(modal);
  }

  edit(cliente) {
    /* let modal = Modal.create(ModalclientesPage, {parametro: cliente});

    modal.onDismiss((data) => {
      if (data) {
        this.dao.edit(data, (cliente) => {
          Toast.showShortBottom("cliente alterado com sucesso.").subscribe((toast) => {
            console.log(toast);
          });
        });
      }
    });

    this.nav.present(modal); */
  }

  delete(cliente) {
    /* let confirm = Alert.create({
      title: "Excluir",
      body: "Gostaria de realmente excluir o cliente " + cliente.descricao + "?",
      buttons: [
        {
          text: "Sim",
          handler: () => {
            this.dao.delete(cliente, (cliente) => {
              let pos = this.listClientes.indexOf(cliente);
              this.listClientes.splice(pos, 1);

              Toast.showShortBottom("Cliente excluído com sucesso.").subscribe((toast) => {
                console.log(toast);
              });
            });
          }
        },
        {
          text: "Não"
        }
      ]
    });

    this.nav.present(confirm); */
  }
}
