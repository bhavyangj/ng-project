import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
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
import { CompleteCheckoutComponent } from './PAGES/complete-checkout/complete-checkout.component';
import { OrderedProductsComponent } from './components/ordered-products/ordered-products.component';
import { ProductDetailComponent } from './PAGES/product-detail/product-detail.component';
import { AdminComponent } from './PAGES/admin/admin.component';
import { AddProductComponent } from './COMPONENTS/Admin/add-product/add-product.component';
import { UpdateProductComponent } from './COMPONENTS/Admin/update-product/update-product.component';
import { ViewProductsComponent } from './COMPONENTS/Admin/view-products/view-products.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { DeleteProductsComponent } from './COMPONENTS/Admin/delete-products/delete-products.component';




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
    CompleteCheckoutComponent,
    OrderedProductsComponent,
    ProductDetailComponent,
    AdminComponent,
    AddProductComponent,
    UpdateProductComponent,
    ViewProductsComponent,
    DeleteProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule, // required animations module
    MatCardModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      positionClass: 'toast-bottom-left'
    })
  ],
  providers: [
    HeaderComponent,
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
