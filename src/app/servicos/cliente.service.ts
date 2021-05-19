import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //preciso do http para buscar infos no back
  constructor(private http : HttpClient) { }
  
  public buscarClientePeloCPF(cpf:String){
    return this.http.get("http://localhost:8080/clientes/"+cpf);
  }
}
