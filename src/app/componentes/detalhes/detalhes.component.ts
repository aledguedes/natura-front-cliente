import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { itemPedido } from 'src/app/model/itemPedido';
import { Pedido } from 'src/app/model/Pedido';
import { Produto } from 'src/app/model/Produto';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  public produtoDetalhe: Produto;
  public quantidade: number;

  constructor(
    private route : ActivatedRoute,
    private prodservice : ProdutosService,
    private carService : CarrinhoService,
    private nav : Router
  ) {
    this.quantidade = 1;
  }

  ngOnInit(): void {
    this.route.params.subscribe(parameter => {
        this.recuperarProduto(parameter["id"]);
    })
  }
  public recuperarProduto(id: number) {
    this.prodservice.getProdutoPeloId(id).subscribe(
      (prod: Produto) => { this.produtoDetalhe = prod; },
      erro => { alert("Produto inválido") }
    );
  }

  public adicionarCarrinho() {
    //console.log("Quantidade selecioanda "+this.quantidade);
    //localStorage é uma tabela HASH que guarda cahve e valor
    let pedido: Pedido;
    pedido = JSON.parse(localStorage.getItem("shoopingCart"));
    if (!pedido) {   // se não existir pedido é criado aqui
      pedido = new Pedido();            //não esquecer 
      pedido.valorTotal = 0;
      pedido.itensPedido = [];
    }

    let item: itemPedido;
    item = new itemPedido();            //não esquecer
    item.qtdeItem = this.quantidade;
    item.produto = this.produtoDetalhe;
    item.precoUnitario = this.produtoDetalhe.preco;
    item.precoTotal = item.precoUnitario * item.qtdeItem;

    pedido.itensPedido.push(item);
    pedido.valorTotal = pedido.valorTotal + item.precoTotal;

    localStorage.setItem("shoopingCart", JSON.stringify(pedido));
    this.carService.getNumberOfItems().next(pedido.itensPedido.length);

    //montagem do carrinho de compras

    this.nav.navigate(['carrinho'])
  }
}
