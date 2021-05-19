import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProcurabykeyService } from 'src/app/servicos/procurabykey.service';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-buscarpalavrachave',
  templateUrl: './buscarpalavrachave.component.html',
  styleUrls: ['./buscarpalavrachave.component.css']
})
export class BuscarpalavrachaveComponent implements OnInit {

  public keyword : string;
  public lista : Produto[] = [];
  
  constructor(
    private busca : ProcurabykeyService,
    private service : ProdutosService) {

    busca.getKeyWord().subscribe(
      (res : string) => {
        this.keyword = res;
        /*
        console.log("Nova palavra chave: "+this.keyword);
        no console tem que aparecer o vanbar e nova palavra chave
        */
        this.service.getProdutosPelaPalavraChave(this.keyword)
        .subscribe((res:Produto[]) => {
          console.log(res); 
          this.lista = res;
        });
       });
        
        /*
        colocar service do produto para fazer a parametrização com as palavras chaves        
        */
     
    /* 
    console.log("Recebi do servico bykey: "+this.keyword);
  
            Até aqui funfou man
            porém, eu não consigo fazer uma nova busca
            sem voltar pra index
             */
  }

  ngOnInit(): void {
  }
  /*
  chamo o service (busca por palavrachave) no construtor
  */
}
