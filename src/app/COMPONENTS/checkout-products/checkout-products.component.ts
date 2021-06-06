import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { WishlistService } from 'src/app/SERVICES/wishlist.service';
import { OrderPlacedService } from 'src/app/SERVICES/order-placed.service';


@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(
    public shopping_cart_service: ShoppingCartService,
    public orderlist: OrderPlacedService,
    public wishlist: WishlistService) { }

  ngOnInit(): void {
    console.log('products ', this.checkout_products)
  }

  removeItem(p) {
    if (confirm("Are you sure to delete product?")) {
      this.shopping_cart_service.removerItem(p)
      this.deleteEvent.emit(p)
    }
  }
  addToWishlist(p) {
    this.shopping_cart_service.removerItem(p)
    this.deleteEvent.emit(p)
    this.wishlist.addProduct(p)
    alert("Product moved to wishlist")
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

  IncQuantity(p) {
    console.log("p.quan: ", p.quantity)
    var cart_items = JSON.parse(localStorage.getItem("shopping_cart"));
    // Change value
    
    // Save the new item with updated value
    if (p.quantity != 5) {
      // cart_items[p.id].quantity += 1;
      p.quantity += 1;
      localStorage.setItem("shopping_cart", JSON.stringify(this.checkout_products));
      localStorage.setItem("Products", JSON.stringify(this.checkout_products));
      console.log("Product quantity updated: ", p.quantity)
      // this.shopping_cart_service.addProduct(p)
      // this.shopping_cart_service.total += p.price;
      // this.shopping_cart_service.getTotal()
      // console.log(this.shopping_cart_service.total)
    }
    else
      alert("you can't add more than 5 quantity")
  }
  DcrQuantity(p) {
    if (p.quantity > 1) {
      // this.shopping_cart_service.removerItem(p)
      p.quantity -= 1;
      localStorage.setItem("shopping_cart", JSON.stringify(this.checkout_products));
      localStorage.setItem("Products", JSON.stringify(this.checkout_products));
      console.log("Product quantity updated: ", p.quantity)
      // this.shopping_cart_service.total -= p.price;
      // this.shopping_cart_service.removertoTotal(p)
      // this.shopping_cart_service.getTotal() 
      // console.log(this.shopping_cart_service.total)
    }
    else
      alert("quantity can't be less than 1")
  }
}
