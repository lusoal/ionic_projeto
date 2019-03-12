import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { LivrosPage } from '../livros/livros';

/**
 * Generated class for the ListarLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-livros',
  templateUrl: 'listar-livros.html',
})
export class ListarLivrosPage {
  public livros: Livro[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var livro01 = {
      titulo: 'Senhor dos Aneis',
      subtitulo: 'O retorno do rei',
      capa: 'Padrao',
      editora: 'Abril',
      autor: 'J Tolkien',
      isbn: 'Teste',
      publicacao: '1984',
      paginas: 455
    };

    this.livros = [livro01];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarLivrosPage');
  }

  irParaDestino(livro: Livro) {
    this.navCtrl.push(LivrosPage, { "meulivrinho": livro })
    console.log("Abrir pagina de especificacao do livro")
  }

}
