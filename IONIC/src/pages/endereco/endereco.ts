import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CidadesProvider } from '../../providers/cidades';
import { BairrosProvider } from '../../providers/bairros';

/**
 * Generated class for the EnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endereco',
  templateUrl: 'endereco.html',
})
export class EnderecoPage {
  public listaCidades = [];
  public id_cidade : any;
  public id_Bairro : any;
  public listaBairros = [];
  public exibirConteudo : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cidades : CidadesProvider, private bairros : BairrosProvider) {
  }

  ionViewDidLoad() {
    console.log("Chamdo");
    this.listaBairros = [];
    this.listaCidades = [];
    this.exibirConteudo = false;
    this.id_cidade = null;
    this.id_Bairro = null;

    this.cidades.cidades().subscribe(
      (data : any) => {
        console.log(this.id_cidade);
        this.listaCidades = data;
        console.log(this.listaCidades);
      },
      (error : any) => {
        console.log(error);
      }
    )
  }
  onChange(){
    this.bairros.bairros(this.id_cidade).subscribe(
    (data : any) => {
      this.listaBairros = data;
    },
    (error : any) => {
      console.log("error");
      console.log(this.id_cidade);
      console.log(error);
    }

  )
  }
  onChangeBairros(){
    if(this.id_Bairro != null){
    this.exibirConteudo = true;
    }else{
      this.exibirConteudo = false;
    }
   }
}
