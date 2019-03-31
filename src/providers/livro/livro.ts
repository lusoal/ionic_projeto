import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LivroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LivroProvider {

  private baseApiPath = 'https://openlibrary.org/api/';

  constructor(public http: Http) {
    console.log('Hello LivroProvider Provider');
  }

  getSomeBooks() {
    return this.http.get(this.baseApiPath + 'books?bibkeys=ISBN:9780345339706,ISBN:9780439064873,ISBN:9780735223523,ISBN:9780525521426&format=json&details=true');
  }

  getBooksCodes(){
    return null
  }

}
