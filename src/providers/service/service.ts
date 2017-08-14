import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  private baseApi = "http://cloud10.agrodados.com.br/ws";

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getTest() {
    console.log('TESTANDO BUSCANDO URL');
    return this.http.get(this.baseApi+"/romaneios/consultalogin.aws.php?usuario=user2123&senha=5871@pw.tmp&idBase=554768163800");
  }

}
