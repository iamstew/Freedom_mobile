import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { Product } from '../models/product.interface';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})

export class ProductResolver implements Resolve<Product> {

  constructor(
    private ProductService: ProductsService,
    private router: Router
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    return this.ProductService.getProduct(route.params?.['id']).pipe(
      catchError( () => {
        this.router.navigate(['catalog']);
        return EMPTY;
      })
    );
  }
}
