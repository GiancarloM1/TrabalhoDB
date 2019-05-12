import { SaboresProvider } from './../../providers/sabores';
import { TamanhosProvider } from './../../providers/tamanhos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoPage } from '../endereco/endereco';

/**
 * Generated class for the TamanhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tamanhos',
  templateUrl: 'tamanhos.html',
})
export class TamanhosPage {
  public listaTamanhos = [];
  public id_Tam : any;
  public listaSabores = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanhos : TamanhosProvider,private sabores : SaboresProvider) {
  }

  ionViewDidLoad() {
    this.tamanhos.tamanhos().subscribe(
      (data : any) => {
        console.log("Tamanjos");
        console.log(data);
        this.listaTamanhos = data;
      },
      (error : any) => {
        console.log(error);
      }
    )
  }
  onChange(){
    this.sabores.sabores(this.id_Tam).subscribe(
    (data : any) => {
      this.listaSabores = data;

    },
    (error : any) => {
      console.log(error);
    }

  )
  }
  dadosEntrega(){
    this.navCtrl.push(EnderecoPage);
  }
}
