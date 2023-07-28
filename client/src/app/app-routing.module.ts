import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductResolver } from './services/product.resolver';

const routes: Routes = [
  { path : "", component: HomeComponent},
  { path : "auth", component: AuthComponent},
  { path : "cart", component: CartComponent},
  { path : "catalog", component: CatalogComponent},
  { path : "catalog/:id", component: ProductComponent},
  { path : "profile", component: ProfileComponent},
  { path : "orders", component: OrdersComponent},
  { path : "product/:id", component: ProductComponent, resolve: {data: ProductResolver}},

  { path: "**", redirectTo: "", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
