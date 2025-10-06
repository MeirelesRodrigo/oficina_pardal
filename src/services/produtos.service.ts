import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private readonly url = environment.apiBase + 'produtos/';

  constructor(private readonly httpClient: HttpClient) {}

  getProdutos():Observable<any>{
    return this.httpClient.get<any>(this.url);
  }

}
