import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Pedido } from 'src/app/model/Pedido';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { CategoriaService } from 'src/app/servicos/categoria.service';
import { ProcurabykeyService } from 'src/app/servicos/procurabykey.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public lista: Categoria[];
  public numItens : number;
  private pedido : Pedido;
  public keyword : string = "";

  constructor(
    private service : CategoriaService, 
    private carService : CarrinhoService, 
    private route: Router,
    private busca : ProcurabykeyService)
    { 
    this.numItens = 0;
  }

  public continuar(){
    this.route.navigate(["/"]);
  }
  
  ngOnInit(): void {
    this.pedido = JSON.parse(localStorage.getItem("shoopingCart"))
    if(this.pedido){
      this.numItens = this.pedido.itensPedido.length;
    }

    this.service.getAllCategoria()
                .subscribe((res: Categoria[]) => {
                  this.lista = res;
              }, err => console.log(err));
    this.carService.getNumberOfItems().subscribe(
      (res) => {this.numItens = res});
  }
  public buscar(){
    /*console.log("Key: "+this.keyword);
     Enviar para o back => criar uma rota rounting  */

    if(this.keyword){
      console.log("Navbar: "+this.keyword)
      this.busca.getKeyWord().next(this.keyword);
      /* 
      busca : link com o método criado no service
      no buscapalavrachave.component.ts usa o outro metodo get...      
      */
      this.route.navigate(['/busca']);
      /* até aqui funciona a rota, porém não está configurado para as buscas customizadas
      ​tem que passar o parâmetro da requisição, isso é feito via serviço e não url

      procurabykey
      
      
      */
    }
  }

}
