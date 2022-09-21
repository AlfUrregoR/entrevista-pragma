import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly uriGetProducts = '/api/products/';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get(
      `${environment.backendUrl}${this.uriGetProducts}`
    ) as Observable<any>;
  }
}
