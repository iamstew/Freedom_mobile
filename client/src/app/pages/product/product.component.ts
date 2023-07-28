import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  productSubscription: Subscription;
  
  cart: Product[];
  CartSubscription: Subscription; 

  constructor(
    private TitleService: Title,
    private route: ActivatedRoute,
    private CartService: CartService
  ){}
  
  ngOnInit(){
    this.productSubscription = this.route.data.subscribe( (data) => {
      this.product = data['data'];
    })
    
    this.TitleService.setTitle(this.product.name);

    this.CartSubscription = this.CartService.getCart().subscribe( (data) => {
      this.cart = data;
    });
  }

  addToCart(product: Product){
    product.amount = 1;
    let findItem;

    if (this.cart.length > 0){
      findItem = this.cart.find( (item) => item.id === product.id)

      if (findItem) this.updateCart(findItem)
      else this.pushToCart(product)

    } else this.pushToCart(product);
  }

  pushToCart(product: Product){
    this.CartService.addToCart(product).subscribe( (data) => {
      this.cart.push(data);
    });
  }
  
  updateCart(product: Product){
    if (product.amount) product.amount+=1;
    
    this.CartService.updateProduct(product).subscribe( () => { })
  }
}
