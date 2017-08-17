import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastMensagem {

    constructor(public toastCrtl: ToastController){
    }

    setToast(mensagem: any) {
       let toast = this.toastCrtl.create({
          message: mensagem,
          duration: 5000,
          position: 'top'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
    }
}
