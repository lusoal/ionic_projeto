import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';

/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {

  public livrinho:Livro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.livrinho = this.navParams.get("meulivrinho");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrosPage');
  }

}
