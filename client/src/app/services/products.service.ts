import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'http://localhost:3000/products'
  catalog: Product[] = [];
  
  // private cartItemCount = new BehaviorSubject<number>(0);
  
  constructor(private http: HttpClient) { }
  
  getCatalog() {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`)
  }
}
