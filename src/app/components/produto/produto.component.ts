import {Component, OnInit} from '@angular/core';
import {ProdutosService} from '../../../services/produtos.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-produto',
  imports: [MatTableModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
  standalone: true
})
export class ProdutoComponent implements OnInit{

  produtos : any[] = []
  columnsToDisplay = ['codigo', 'nome'];

  constructor(private produtosService : ProdutosService) {}

  ngOnInit() {
    this.produtosService.getProdutos().subscribe(data => {
      console.log(data)
      this.produtos = data;
    })
  }

}
