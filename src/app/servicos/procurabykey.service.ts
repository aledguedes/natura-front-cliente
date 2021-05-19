import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcurabykeyService {

  private keyword: BehaviorSubject<string>;

  constructor() { 
    this.keyword = new BehaviorSubject("");
    /*
    sempre que usar BehaviorSubject
    inicializa-lo
    */
  }
  /*
  public setKeyWord(key : string){
    this.keyword.next(key);
  }*/

  public getKeyWord(){
    return this.keyword;
  }

  /*public getKeyWord(){
    return this.keyword;
  }*/
}
