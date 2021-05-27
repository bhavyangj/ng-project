import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './PAGES/home/home.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { LoginComponent } from './PAGES/login/login.component';
import {HeaderComponent} from './COMPONENTS/header/header.component';
import { BannerComponent } from './COMPONENTS/banner/banner.component'
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { CheckoutSubtotalComponent } from './COMPONENTS/checkout-subtotal/checkout-subtotal.component';
import { SavedItemsComponent } from './PAGES/saved-items/saved-items.component';
import { WishlistProductsComponent } from './components/wishlist-products/wishlist-products.component';
import { RegisterComponent } from './PAGES/register/register.component';
import { OrderPlacedComponent } from './PAGES/order-placed/order-placed.component';
import { FilterComponent } from './components/filter/filter.component';
import { CompleteCheckoutComponent } from './PAGES/complete-checkout/complete-checkout.component';
import { OrderedProductsComponent } from './components/ordered-products/ordered-products.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    HeaderComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent,
    SavedItemsComponent,
    WishlistProductsComponent,
    RegisterComponent,
    OrderPlacedComponent,
    FilterComponent,
    CompleteCheckoutComponent,
    OrderedProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
