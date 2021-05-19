import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Pedido } from 'src/app/model/Pedido';
import { Produto } from 'src/app/model/Produto';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { PedidoService } from 'src/app/servicos/pedido.service';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {

  public idPedido: number;
  //por minha conta
  public pedidoDetalhe : Pedido;
  public dadosRecibo : string

  constructor(private router : ActivatedRoute,
    /* por minha conta */
    private cliService : ClienteService,
    private pedService : PedidoService) { 
    this.idPedido = 0;
    
  }

  ngOnInit(): void {
    this.idPedido = this.router.snapshot.params["id"];
    //por minha conta
  }
  public reciboProduto(idPedido: number) {
    let dadosRecibo : string;
    this.pedService.getPedidoPorId(idPedido).subscribe(
      (ped: Pedido) => { 
        this.pedidoDetalhe.cliente.nome = dadosRecibo;
        console.log("Funfou? "+ped);
      },
      erro => { alert("Produto inválido") 
    });
  }
}
