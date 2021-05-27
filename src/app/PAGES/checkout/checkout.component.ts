import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: any [];

  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }


  getShoppingCart(){
    console.log('cart:', this.shopping_cart)
   this.items =  this.shopping_cart.getCartItems();
  }

  deleteEventHandler(p){
    console.log("event handled")
    this.getShoppingCart()
  }

}
