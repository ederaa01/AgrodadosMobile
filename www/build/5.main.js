webpackJsonp([5],{

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrocliente__ = __webpack_require__(552);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroclientePageModule", function() { return CadastroclientePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroclientePageModule = (function () {
    function CadastroclientePageModule() {
    }
    return CadastroclientePageModule;
}());
CadastroclientePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cadastrocliente__["a" /* CadastroclientePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrocliente__["a" /* CadastroclientePage */]),
        ],
    })
], CadastroclientePageModule);

//# sourceMappingURL=cadastrocliente.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroclientePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroclientePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CadastroclientePage = (function () {
    function CadastroclientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroclientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroclientePage');
    };
    return CadastroclientePage;
}());
CadastroclientePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-cadastrocliente',template:/*ion-inline-start:"C:\Work\Mobile\agrodadosmobile\AgroDados\src\pages\cadastrocliente\cadastrocliente.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cadastro de Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <form class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">\n\n    <div class="form-group" [ngClass]="aplicaCssErro(\'nome\')">\n\n      <div class="col-sm-12">\n\n        <label for="nome" class="control-label">Nome</label>\n\n      </div>\n\n\n\n      <div class="col-sm-12">\n\n        <input type="text" class="form-control" formControlName="nome" id="nome" placeholder="Nome">\n\n\n\n        <app-campo-control-erro [mostrarErro]="verificaValidTouched(\'nome\')" msgErro="Nome é obrigatório.">\n\n        </app-campo-control-erro>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="form-group" [ngClass]="aplicaCssErro(\'email\')">\n\n      <div class="col-sm-12">\n\n        <label for="email" class="control-label">Email</label>\n\n      </div>\n\n      <div class="col-sm-12">\n\n        <input type="email" class="form-control" formControlName="email" id="email" placeholder="nome@email.com">\n\n        <app-campo-control-erro [mostrarErro]="verificaValidTouched(\'email\')" msgErro="Email é obrigatório.">\n\n        </app-campo-control-erro>\n\n        <app-campo-control-erro [mostrarErro]="verificaEmailInvalido()" msgErro="Email inválido.">\n\n        </app-campo-control-erro>\n\n      </div>\n\n    </div>\n\n\n\n    <div formGroupName="endereco">\n\n\n\n      <div class="form-group">\n\n\n\n        <div class="col-md-3" [ngClass]="aplicaCssErro(\'endereco.cep\')">\n\n          <label for="cep" class="control-label">CEP</label>\n\n          <input type="text" class="form-control" id="cep" formControlName="cep" (blur)="consultaCEP()">\n\n          <app-campo-control-erro [mostrarErro]="verificaValidTouched(\'endereco.cep\')" msgErro="CEP é obrigatório.">\n\n          </app-campo-control-erro>\n\n        </div>\n\n\n\n        <div class="col-md-3" [ngClass]="aplicaCssErro(\'endereco.numero\')">\n\n          <label for="numero" class="control-label">Número</label>\n\n          <input type="text" class="form-control" id="numero" formControlName="numero">\n\n          <app-campo-control-erro [mostrarErro]="verificaValidTouched(\'endereco.numero\')" msgErro="Número é obrigatório.">\n\n          </app-campo-control-erro>\n\n        </div>\n\n\n\n        <div class="col-md-6">\n\n          <label for="complemento" class="control-label">Complemento</label>\n\n          <input type="text" class="form-control" id="complemento" formControlName="complemento">\n\n        </div>\n\n\n\n      </div>\n\n\n\n      <div class="form-group" [ngClass]="aplicaCssErro(\'endereco.rua\')">\n\n\n\n        <div class="col-sm-12">\n\n          <label for="rua" class="control-label">Rua</label>\n\n        </div>\n\n\n\n        <div class="col-sm-12">\n\n          <input type="text" class="form-control" id="rua" formControlName="rua">\n\n\n\n          <app-campo-control-erro [mostrarErro]="verificaValidTouched(\'endereco.rua\')" msgErro="Rua é obrigatório.">\n\n          </app-campo-control-erro>\n\n        </div>\n\n      </div>\n\n\n\n      <div class="form-group">\n\n        <div class="col-md-5" [ngClass]="aplicaCssErro(\'endereco.bairro\')">\n\n          <label for="bairro" class="control-label">Bairro</label>\n\n          <input type="text" class="form-control" id="bairro" formControlName="bairro">\n\n          <app-campo-control-erro [mostrarErro]="verificaValidTouched(\'endereco.bairro\')" msgErro="Bairro é obrigatório.">\n\n          </app-campo-control-erro>\n\n        </div>\n\n\n\n        <div class="col-md-4" [ngClass]="aplicaCssErro(\'endereco.cidade\')">\n\n          <label for="cidade" class="control-label">Cidade</label>\n\n          <input type="text" class="form-control" id="cidade" formControlName="cidade">\n\n          <app-campo-control-erro [mostrarErro]="verificaValidTouched(\'endereco.cidade\')" msgErro="Cidade é obrigatório.">\n\n          </app-campo-control-erro>\n\n        </div>\n\n\n\n        <div class="col-md-3" [ngClass]="aplicaCssErro(\'endereco.estado\')">\n\n          <label for="estado" class="control-label">Estado</label>\n\n          <input type="text" class="form-control" id="estado" formControlName="estado">\n\n          <app-campo-control-erro [mostrarErro]="verificaValidTouched(\'endereco.estado\')" msgErro="Estado é obrigatório.">\n\n          </app-campo-control-erro>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <button type="submit" class="btn btn-primary">Submit</button>\n\n    <button class="btn" (click)="resetar()">Cancelar</button>\n\n\n\n    <app-form-debug [form]="formulario"></app-form-debug>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Work\Mobile\agrodadosmobile\AgroDados\src\pages\cadastrocliente\cadastrocliente.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], CadastroclientePage);

var _a, _b;
//# sourceMappingURL=cadastrocliente.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map