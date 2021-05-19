  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  public inserirNovoPedido(novoPedido: Pedido){
    return this.http.post("http://localhost:8080/pedidos", novoPedido);
  }
  public getPedidoPorId(idPed : number){
    return this.http.get("http://localhost:8080/pedidos/"+idPed);
  }
}