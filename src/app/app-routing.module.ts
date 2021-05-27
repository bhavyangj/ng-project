import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { SavedItemsComponent } from './PAGES/saved-items/saved-items.component';
import { RegisterComponent } from './PAGES/register/register.component';
import { OrderPlacedComponent } from './PAGES/order-placed/order-placed.component';
import { CompleteCheckoutComponent } from './PAGES/complete-checkout/complete-checkout.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'your-orders', component: OrderPlacedComponent },
  {path:'checkout', component: CheckoutComponent},
  {path:'wishlist', component: SavedItemsComponent},
  {path:'complete-checkout', component: CompleteCheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
