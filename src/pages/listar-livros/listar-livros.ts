import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { LivrosPage } from '../livros/livros';
import { Autor } from '../../model/autor';
import { Editora } from '../../model/editora';

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

  autor: Autor = {
    nome: 'J K Tolkien', nascimento: 1800, descricao: 'Teste'
  }
  editora: Editora = {
    nome: 'Teste', descricao: 'Teste'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    //Objeto de Livro com a Image URL para exibir ao clicar em cima
    var livro01 = {
      titulo: 'Senhor dos Aneis',
      subtitulo: 'O retorno do rei',
      capa: 'Padrao',
      editora: this.editora,
      autor: this.autor,
      isbn: 'Teste',
      publicacao: '1984',
      paginas: 455,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg'
    };

    this.livros = [livro01];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarLivrosPage');
  }

  irParaDestino(livro: Livro) {
    //Passando o Objeto para a proxima pagina
    this.navCtrl.push(LivrosPage, { "meulivrinho": livro })
    console.log("Abrir pagina de especificacao do livro")
  }

}
