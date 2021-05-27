import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderPlacedService } from 'src/app/SERVICES/order-placed.service';

@Component({
  selector: 'app-ordered-products',
  templateUrl: './ordered-products.component.html',
  styleUrls: ['./ordered-products.component.css']
})
export class OrderedProductsComponent implements OnInit {

  @Input() ordered_products: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor(public order_placed_service: OrderPlacedService) {}

  ngOnInit(): void {
    console.log('ordered products ', this.order_placed_service)
  }
  removeItem(p){
    alert("Are you sure to delete product?")
    this.order_placed_service.removerItem(p)
    this.deleteEvent.emit(p)
  }
}
