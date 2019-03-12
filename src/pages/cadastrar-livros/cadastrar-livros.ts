import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  //Instanciando um objeto de Livro passando parametros
  livro: Livro = {
    titulo: '', subtitulo: '', capa: '', editora: '',
    autor: '', isbn: '', publicacao: '',
    paginas: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController) { }


  openAlert() {
    let addToAlert = this.alertController.create({
      title: 'Livro Cadastrado com Sucesso',
      subTitle: 'O Livro '+ this.livro.titulo + ' foi cadastrado com sucesso',
      buttons: ['Ok']
    });

    addToAlert.present();
  }

  logForm() {
    console.log(this.livro)
    this.openAlert();
    this.navCtrl.pop();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarLivrosPage');

  }

}
