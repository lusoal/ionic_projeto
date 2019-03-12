import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as CadastrarLivrosPage from '../cadastrar-livros/cadastrar-livros';

/**
 * Generated class for the LivrariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livraria',
  templateUrl: 'livraria.html',
})
export class LivrariaPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Cadastrar Livros',
        'icon': 'angular',
        'tipo': 'cadastrar',
        'description': 'Cadastre seus livros na livraria',
        'color': '#E63135'
      },
      {
        'title': 'Listar Livros',
        'icon': 'css3',
        'tipo': 'listar',
        'description': 'Liste e veja os livros cadastrados',
        'color': '#0CA9EA'
      },
      {
        'title': 'Pesquisar Livros',
        'icon': 'html5',
        'tipo': 'pesquisar',
        'description': 'Pesquisar livros existentes',
        'color': '#F46529'
      }
    ]

  }

  openFunction(tipo: any) {
    if (tipo == 'cadastrar') {
      this.navCtrl.push(CadastrarLivrosPage.CadastrarLivrosPage)
    } else if (tipo == 'listar') {
      this.navCtrl.push(CadastrarLivrosPage.CadastrarLivrosPage)
    } else if (tipo == 'pesquisar') {
      this.navCtrl.push(CadastrarLivrosPage.CadastrarLivrosPage)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrariaPage');
  }

}
