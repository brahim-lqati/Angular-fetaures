import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componetents/home/home.component';
import { ProductsComponent } from './componetents/products/products.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent},
  { path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
