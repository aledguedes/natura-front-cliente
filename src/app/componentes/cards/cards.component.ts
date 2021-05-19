import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public lista: Produto[];
  // criar variável lista do tipo Produto


  //Necessidade de injetar o serviço que busca o produto
  //private service: ProsdutoService
  constructor(private service : ProdutosService) {
    //console.log("Estou no construtor do componente");

   }

  ngOnInit(): void {
    //console.log("Estou na inicialização do componente");
    this.service.getAllProdutos()
                .subscribe((res: Produto[]) => {
                                  this.lista = res;
                                }, err => console.log(err));
    //subscribe cria um canal permanente entre front e back
  }

}
