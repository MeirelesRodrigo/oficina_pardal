import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
  standalone: true
})
export class ProdutoComponent implements OnInit{

  ngOnInit() {
    console.log("PRODUTO")
  }

}
