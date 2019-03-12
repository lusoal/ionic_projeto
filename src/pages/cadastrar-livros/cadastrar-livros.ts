import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';


/**
 * Generated class for the CadastrarLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-livros',
  templateUrl: 'cadastrar-livros.html',
})
export class CadastrarLivrosPage {
  livro: Livro = {
    titulo: '', subtitulo: '', capa: '', editora: '',
    autor: '', isbn : '', publicacao: '',
    paginas: 12
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  logForm() {
    console.log(this.livro)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarLivrosPage');
  }

}
