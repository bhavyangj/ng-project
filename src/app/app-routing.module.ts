import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { SavedItemsComponent } from './PAGES/saved-items/saved-items.component';
import { RegisterComponent } from './PAGES/register/register.component';
import { OrderPlacedComponent } from './PAGES/order-placed/order-placed.component';
import { CompleteCheckoutComponent } from './PAGES/complete-checkout/complete-checkout.component';
import { ProductDetailComponent } from './PAGES/product-detail/product-detail.component';
import { AdminComponent } from './PAGES/admin/admin.component';
import { AddProductComponent } from './COMPONENTS/Admin/add-product/add-product.component';
import { UpdateProductComponent } from './COMPONENTS/Admin/update-product/update-product.component';
import { ViewProductsComponent } from './COMPONENTS/Admin/view-products/view-products.component';
import { DeleteProductsComponent } from './COMPONENTS/Admin/delete-products/delete-products.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'your-orders', component: OrderPlacedComponent },
  {path:'checkout', component: CheckoutComponent},
  {path:'wishlist', component: SavedItemsComponent},
  {path:'complete-checkout', component: CompleteCheckoutComponent},
  {path:'product-detail/:id', component: ProductDetailComponent},
  
  {
    path:'admin', 
    component: AdminComponent,
    children: [
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'view-products',
        component: ViewProductsComponent,
      },
      {
        path: 'update-product',
        component: UpdateProductComponent,
      },
      {
        path: 'delete-products',
        component: DeleteProductsComponent,
      }
    ]
  },
  
  // {path:'admin/add-product',   component: AddProductComponent},
  // {path:'admin/update-product', component: UpdateProductComponent},
  // {path:'admin/view-products', component: ViewProductsComponent},
  // {path:'admin/delete-products', component: DeleteProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
