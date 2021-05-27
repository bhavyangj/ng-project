import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { OrderPlacedService } from 'src/app/SERVICES/order-placed.service';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css']
})
export class CheckoutSubtotalComponent implements OnInit {
  @Input() checkout_products: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()


  constructor(
    public shopping_cart_service: ShoppingCartService,
    public orderlist: OrderPlacedService) {
  }

  ngOnInit(): void {
    console.log('products ', this.checkout_products)
    // setTimeout(() => {                           //<<<---using ()=> syntax
    //   // this.messageSuccess = false;
    // }, 3000);
  }
  orderPlaced(p) {
    this.shopping_cart_service.removerItem(p)
    this.deleteEvent.emit()
    this.orderlist.addProduct(p)
  }
  OrderItems() {
    console.log('check out: ', this.checkout_products)
    for (var product of this.checkout_products) {
      console.log('products is going for check out: ', product)
      this.orderPlaced(product);
    }
    alert('list moved')
  }
}