import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http:HttpClient) { }

  public getAllProdutos(){
    //console.log("Estou no PRODUTO SERVICE - Conectado ao BAckEnd!!!")
    return this.http.get("http://localhost:8080/produtos");
  }

  public getProdutoPeloId(id : number){
    return this.http.get("http://localhost:8080/produtos/"+id);
  }
  public getbuscarPelaCategoria(idCateg : number){
    return this.http.get("http://localhost:8080/produtos/categoria/"+idCateg);
  }
  public getProdutosPelaPalavraChave(keyword : string){
    return this.http.get("http://localhost:8080/produtos/busca?key="+keyword);
  }
}
 