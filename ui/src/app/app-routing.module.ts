import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "catalog", component: CatalogComponent},
  {path : "auth", component: AuthComponent},
  {path : "cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
