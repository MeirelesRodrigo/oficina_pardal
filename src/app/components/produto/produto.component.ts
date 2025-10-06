import {Component, OnInit} from '@angular/core';
import {ProdutosService} from '../../../services/produtos.service';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
  standalone: true
})
export class ProdutoComponent implements OnInit{

  constructor(private produtosService : ProdutosService) {
  }

  ngOnInit() {
    this.produtosService.getProdutos().subscribe(data => {
      console.log(data)
    })
  }

}
