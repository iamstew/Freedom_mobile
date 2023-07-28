import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/app/models/product.interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  url: string = 'http://localhost:3000/cart'
  cart: Product[] = [];

  constructor(private http: HttpClient) { }
  
  removeFromCart(id: number){
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  addToCart(product: Product) {
    return this.http.post<Product>(this.url, product);
  }
  
  getCart() {
    return this.http.get<Product[]>(this.url);
  }

  updateProduct(product: Product){
    return this.http.put<Product>(`${this.url}/${product.id}`, product)
  }

  getProduct(product: Product){
    return this.http.get<Product>(`${this.url}/${product.id}`);
  }
}
