import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

    constructior(){
    }

    getConfigData(): any{
      return localStorage.getItem(config_key_name);
    }

    setConfigData(showSlide?: boolean, name?: string, username?: string, relembrar?: boolean){
      let config = {
         showSlide: false,
         name: "",
         username: "",
         relembrar: false
      }

      if(showSlide){
        config.showSlide = showSlide;
      }

      if(name != null ){
        config.name = name;
      }

      if(username != null){
        config.username = username;
      }

      if(relembrar != null ){
        config.relembrar = relembrar;
      }


      localStorage.setItem(config_key_name, JSON.stringify(config));

    }

}
