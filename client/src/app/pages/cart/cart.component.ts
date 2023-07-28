import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  title: string = "Корзина";
  cart: Product[] = [];
  CartSubscription: Subscription;
  
  total: number = 0;
  totalSubscription: Subscription;

  constructor(
    private TitleService: Title,
    private CartService: CartService
  )
  {
    this.TitleService.setTitle(this.title)
  }
  
  ngOnInit(){
    this.CartSubscription = this.CartService.getCart().subscribe( (data) => {
      this.cart = data;
    })
    
    this.getTotal();
  }
  
  ngOnDestroy(){
    if (this.CartSubscription) this.CartSubscription.unsubscribe();
  }
  
  removeProduct(product: Product){
    this.total -= product.amount * product.price;
    this.CartService.removeFromCart(product.id).subscribe( () => {
      let index = this.cart.findIndex( (item) => item.id === product.id)
      this.cart.splice(index, 1);
    });
  }
  
  decreaseProductAmount(product: Product){
    if (product.amount) product.amount--;
    this.total -= product.price;
    this.CartService.updateProduct(product).subscribe();
  }
  
  increaseProductAmount(product: Product) {
    if (product.amount) product.amount++;
    this.CartService.updateProduct(product).subscribe();
    this.total += product.price;
  }
  
  getTotal(){
    this.totalSubscription = this.CartService.getCart().subscribe( (data) => {
      data.map( (product) => this.total += product.price * product.amount);
    })
  }

  clearCart() {
  }
}
