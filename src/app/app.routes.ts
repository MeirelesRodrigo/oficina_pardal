import {Routes} from '@angular/router';
import {ProdutoComponent} from './components/produto/produto.component';
import {Home} from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'produtos',
    component: ProdutoComponent
  }
];
