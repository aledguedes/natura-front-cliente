import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-buscarcategoria',
  templateUrl: './buscarcategoria.component.html',
  styleUrls: ['./buscarcategoria.component.css']
})
export class BuscarcategoriaComponent implements OnInit {

  public lista : Produto[] = [];
  public idCategoria : number;
  
  constructor(private route: ActivatedRoute, private srcService : ProdutosService) { 
    this.route.params.subscribe((parameters) => {
      //console.log("Categoria: "+parameters["id"]);
      this.idCategoria = parameters["id"];  /*  Precisa atribuir o id da categoria para o atributo */
      this.buscarPorCategoria();            /*    CHAMANDO O MÉTODO */
    });
  }

  ngOnInit(): void {
  }

  public buscarPorCategoria(){
    this.srcService.getbuscarPelaCategoria(this.idCategoria)
    .subscribe((res:Produto[]) => {
      //console.log(res); 
      this.lista = res;
    },
    (err) => {
      console.log(err); 
    });
  }

}
