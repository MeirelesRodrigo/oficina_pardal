import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-register-product',
  imports: [CommonModule],
  templateUrl: './register-product.html',
  styleUrl: './register-product.css'
})
export class RegisterProduct implements OnInit {
  @Input() data: { 
    nome: string; preco: number; codigoBarras: string, localizacao: string } | null = null;

  form !: FormGroup

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome : [this.data?.nome || '',Validators.required]
    })
  }

}
