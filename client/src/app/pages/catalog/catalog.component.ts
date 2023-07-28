import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  title: string = "Каталог";
  catalog: Product[];
  catalogSubscription: Subscription;

  cart: Product[];
  CartSubscription: Subscription;

  constructor(
    private TitleService: Title,
    private ProductsService: ProductsService,
    private CartService: CartService
  ){
    this.TitleService.setTitle(this.title)
  }

  ngOnInit(): void{
    this.catalogSubscription = this.ProductsService.getCatalog().subscribe( (data) => {
      this.catalog = data;
    })

    this.CartSubscription = this.CartService.getCart().subscribe( (data) => {
      this.cart = data;
    });
  }

  ngOnDestroy(){
    if (this.catalogSubscription) this.catalogSubscription.unsubscribe();
    if (this.CartSubscription) this.CartSubscription.unsubscribe();
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
    
    this.CartService.updateProduct(product).subscribe( (data) => {

    })
  }
}
