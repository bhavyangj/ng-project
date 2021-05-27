import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishlistService } from 'src/app/SERVICES/wishlist.service';

@Component({
  selector: 'app-wishlist-products',
  templateUrl: './wishlist-products.component.html',
  styleUrls: ['./wishlist-products.component.css']
})
export class WishlistProductsComponent implements OnInit {

  @Input() wishlist_products: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor(public wishlist_service: WishlistService) {}

  ngOnInit(): void {
    console.log('products ', this.wishlist_products)
  }
  removeItem(p){
    alert("Are you sure to delete product?")
    this.wishlist_service.removerItem(p)
    this.deleteEvent.emit(p)
  }
}
